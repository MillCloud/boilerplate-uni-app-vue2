import ajax from 'uni-ajax';
import statuses from 'statuses';
import { constantCase } from '@modyqyw/utils';
import * as AxiosLogger from 'axios-logger';
import axiosRetry from 'axios-retry';
import pkg from '@/../package.json';
import { showModal } from '@/utils/modal';
import { getToken } from '@/utils/storage';

export const reLaunchCodes = new Set(['TOKEN_OUTDATED']);

/** @desc 错误统一处理方法 */
export const handleShowError = (response: IResponse) => {
  if (reLaunchCodes.has(response.code)) {
    showModal({
      content: '请重新登录',
      success: () => {
        uni.clearStorageSync();
        uni.reLaunch({
          url: '/pages/index',
        });
      },
    });
  } else {
    showModal({
      content: `发生了错误，错误代码：${response.code}，错误信息：${response.message}。`,
    });
  }
};

/** @desc 请求实例 */
const instance = ajax.create({
  baseURL: process.env.VUE_APP_REQUEST_BASE_URL || '',
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Version': `${pkg.name}-${process.env.VUE_APP_PLATFORM}-${
      process.env.NODE_ENV
    }/${pkg.version.replace('-', '')}`,
  },
  sslVerify: false,
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
    // @ts-ignore
    (request) => AxiosLogger.requestLogger(request, { prefixText: false }),
    (error) => AxiosLogger.errorLogger(error, { prefixText: false }),
  );
}
// @ts-ignore
axiosRetry(instance, { retryDelay: axiosRetry.exponentialDelay });

if (process.env.NODE_ENV === 'development') {
  instance.interceptors.response.use(
    // @ts-ignore
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
        message: '请求已取消',
        code: 'REQUEST_CANCELLED',
      };
    }
    const response: IResponse = {
      success: false,
      message: '',
      code: '',
    };
    if (error.statusCode && (error.statusCode < 200 || error.statusCode >= 300)) {
      // https://uniajax.ponjs.com/instance/interceptor.html#%E5%93%8D%E5%BA%94%E6%8B%A6%E6%88%AA%E5%99%A8
      try {
        response.code = constantCase(statuses(error.statusCode).toString());
        response.message = constantCase(statuses(error.statusCode).toString());
      } catch {
        response.code = 'ERROR_OCCURRED';
        response.message = '发生了错误';
      }
    } else if (
      error.errMsg === 'request:fail abort statusCode:-1' ||
      error.errMsg.toUpperCase().includes('TIMEOUT') ||
      error.errMsg.toUpperCase().includes('CONNRESET') ||
      error.errMsg.toUpperCase().includes('CONNECTION_RESET')
    ) {
      // 超时
      response.message = '请求超时';
      response.code = 'REQUEST_TIMEOUT';
    } else if (error.data && Object.keys(error.data).length === 0) {
      // 发送了请求，没有收到响应
      response.message = '服务器无响应';
      response.code = 'NO_RESPONSE';
    } else {
      // 请求时发生错误
      response.message = '请求错误';
      response.code = 'REQUEST_ERROR';
    }
    // 处理错误
    if (error.config.showError !== false) {
      handleShowError(response);
    }
    return response;
  },
);

export { instance as request };
