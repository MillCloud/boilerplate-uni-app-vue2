import Vue from 'vue';
import ajax from 'uni-ajax';
import i18n from '@/i18n';
import { getToken } from '@/utils/storage';
import { showModal } from '@/utils/modal';
import manifest from '@/manifest.json';
import pkg from '@@/package.json';
import status from 'statuses';
import { constantCase } from '@modyqyw/utils';
import axiosRetry from 'axios-retry';

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
      content: response.message,
    });
  }
};

/** @desc 请求实例 */
const instance = ajax.create({
  baseURL: process.env.VUE_APP_REQUEST_BASE_URL || '',
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Version': `${pkg.name}/${manifest.versionName}`,
  },
  withCredentials: false,
  dataType: 'json',
  responseType: 'text',
  sslVerify: false,
});

axiosRetry(instance, { retryDelay: axiosRetry.exponentialDelay });

// 请求拦截器，添加 token
instance.interceptors.request.use((config) => ({
  ...config,
  header: {
    ...config.header,
    'X-Token': getToken() || '',
  },
}));

// 响应拦截器，处理正常响应和错误，返回统一的格式，便于后续处理
// 这里考虑 Restful API 格式，JSON-RPC 请自行处理，GraphQL 未考虑
instance.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('response', response);
    }
    const { data, config } = response;
    if (!data.success && config.showError !== false) {
      handleShowError(data);
    }
    return data;
  },
  (error) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('error', error);
    }
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
    if (error.statusCode && error.statusCode !== 200) {
      // https://uniajax.ponjs.com/instance/interceptor.html#%E5%93%8D%E5%BA%94%E6%8B%A6%E6%88%AA%E5%99%A8
      response.message = status(error.statusCode)
        ? i18n.t(`error.${constantCase(status(error.statusCode))}`)
        : i18n.t('error.ERROR_OCCURRED');
      response.code = error.statusCode;
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
