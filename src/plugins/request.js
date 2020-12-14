import Vue from 'vue';
import ajax from 'uni-ajax';
import { getToken } from '@u/storage';
import { showModal } from '@u/modal';
import packageInfo from '../../package.json';

// https://uniajax.ponjs.com/
// 要取消请求，参考 https://uniajax.ponjs.com/usage.html#requesttask

const reLaunchCodes = new Set(['YOUR_RELAUNCH_CODE']);

const objectStatusCode = {
  403: '不允许访问',
  404: '请求的接口不存在',
  500: '服务器内部错误',
};

const handleValidateStatusCode = (statusCode) =>
  (statusCode >= 200 && statusCode < 300) || statusCode === 304;

const handleShowError = (response) => {
  if (reLaunchCodes.has(response.code)) {
    showModal({
      content: '请重新登录。',
      success: () => {
        uni.clearStorageSync();
        uni.reLaunch({
          url: '/pages/index/index',
        });
      },
    });
  } else {
    showModal({
      content: response.message,
    });
  }
};

const instance = ajax.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-Version': `${packageInfo.name}/${packageInfo.version}`,
  },
  withCredentials: false,
  dataType: 'json',
  responseType: 'text',
  sslVerify: false,
});

instance.interceptors.request.use((config) => {
  const token = getToken();
  return {
    ...config,
    header: {
      ...config.header,
      'X-Token': token || '',
    },
  };
});

instance.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (!data.success) {
      handleShowError(data);
    }
    return response.data;
  },
  (error) => {
    if (error.errMsg.toLowerCase().includes('cancel')) {
      return {
        success: false,
        message: '请求已取消',
        code: 'REQUEST_CANCELLED',
      };
    }
    const response = {
      success: false,
      message: '',
      code: '',
    };
    if (!handleValidateStatusCode(error.statusCode)) {
      // 状态码不正常
      response.message =
        objectStatusCode[error.statusCode] ||
        `发生了错误，状态码${error.statusCode}`;
      response.code = 'INVALID_STATUS_CODE';
    } else if (
      error.errMsg.toUpperCase().includes('TIMEOUT') ||
      error.errMsg.toUpperCase().includes('CONNRESET')
    ) {
      // 超时
      response.message = '请求超时';
      response.code = 'REQUEST_TIMEOUT';
    } else if (error.data && Object.keys(error.data).length === 0) {
      // 发送了请求，没有收到响应
      response.message = '服务器无响应，请稍后再试。';
      response.code = 'NO_REQUEST';
    } else {
      // 请求时发生错误
      response.message = '请求错误';
      response.code = 'REQUEST_ERROR';
    }
    // 处理错误
    handleShowError(response);
    return response;
  },
);

Vue.prototype.$request = instance;

export default instance;
