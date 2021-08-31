import Vue from 'vue';
import ajax from 'uni-ajax';
import pkg from '@@/package.json';
import statuses from 'statuses';
import { constantCase } from '@modyqyw/utils';
import { setupCache } from 'axios-cache-adapter';
import * as AxiosLogger from 'axios-logger';
import axiosRetry from 'axios-retry';
import manifest from '@/manifest.json';
import { showModal } from '@/utils/modal';
import { getToken } from '@/utils/storage';
import i18n from '@/i18n';

// https://uniajax.ponjs.com/
// 要取消请求，参考 https://uniajax.ponjs.com/usage.html#requesttask

/** @desc 需要重启应用并清空登录信息的响应代码 */
export const reLaunchCodes = new Set(['TOKEN_OUTDATED']);

/** @desc 错误统一处理方法 */
export const handleShowError = (response) => {
  if (reLaunchCodes.has(response.code)) {
    uni.clearStorageSync();
    uni.reLaunch({
      url: '/pages/index/index',
    });
  } else {
    showModal({
      content: `发生了错误，错误代码：${response.code}，错误信息：${response.message}。`,
    });
  }
};

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  invalidate: async (config, request) => {
    if (request.invalidate === true) {
      await config.store.removeItem(config.uuid);
    }
  },
});

/** @desc 请求实例 */
const instance = ajax.create({
  baseURL: process.env.VUE_APP_REQUEST_BASE_URL || '',
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Version': `${pkg.name}/${manifest.versionName}`,
  },
  sslVerify: false,
  adapter: cache.adapter,
});

instance.interceptors.request.use((config) => ({
  ...config,
  header: {
    ...config.header,
    'X-Token': getToken() || '',
  },
}));
if (process.env.NODE_ENV === 'development') {
  instance.interceptors.request.use(
    (request) => AxiosLogger.requestLogger(request, { prefixText: false }),
    (error) => AxiosLogger.errorLogger(error, { prefixText: false }),
  );
}
axiosRetry(instance, { retryDelay: axiosRetry.exponentialDelay });

if (process.env.NODE_ENV === 'development') {
  instance.interceptors.response.use(
    (response) => AxiosLogger.responseLogger(response, { prefixText: false }),
    (error) => AxiosLogger.errorLogger(error, { prefixText: false }),
  );
}
instance.interceptors.response.use(
  (response) => {
    const { data, config } = response;
    if (!data.success && config.showError !== false) {
      handleShowError(data);
    }
    return data;
  },
  (error) => {
    // https://github.com/ponjs/uni-ajax/blob/dev/src/lib/ajax.js#L66
    if (error.errMsg.includes('request:fail abort')) {
      return {
        success: false,
        message: i18n.t('error.REQUEST_CANCELLED'),
        code: 'REQUEST_CANCELLED',
      };
    }
    const response = {
      success: false,
      message: '',
      code: '',
    };
    if (
      error.statusCode &&
      (error.statusCode < 200 || error.statusCode >= 300)
    ) {
      // https://uniajax.ponjs.com/instance/interceptor.html#%E5%93%8D%E5%BA%94%E6%8B%A6%E6%88%AA%E5%99%A8
      try {
        response.code = constantCase(statuses(error.statusCode));
        response.message = i18n.t(
          `error.${constantCase(statuses(error.statusCode))}`,
        );
      } catch {
        response.code = 'ERROR_OCCURRED';
        response.message = i18n.t(`error.ERROR_OCCURRED`);
      }
    } else if (
      error.errMsg === 'request:fail abort statusCode:-1' ||
      error.errMsg.toUpperCase().includes('TIMEOUT') ||
      error.errMsg.toUpperCase().includes('CONNRESET') ||
      error.errMsg.toUpperCase().includes('CONNECTION_RESET')
    ) {
      // 超时
      response.message = i18n.t('error.REQUEST_TIMEOUT');
      response.code = 'REQUEST_TIMEOUT';
    } else if (error.data && Object.keys(error.data).length === 0) {
      // 发送了请求，没有收到响应
      response.message = i18n.t('error.NO_RESPONSE');
      response.code = 'NO_RESPONSE';
    } else {
      // 请求时发生错误
      response.message = i18n.t('error.REQUEST_ERROR');
      response.code = 'REQUEST_ERROR';
    }
    // 处理错误
    if (error.config.showError !== false) {
      handleShowError(response);
    }
    return response;
  },
);

Vue.prototype.$request = instance;

export default instance;
