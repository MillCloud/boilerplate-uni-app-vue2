import Vue from 'vue';
import ajax from 'uni-ajax';
import { getToken } from '@u/storage';
import { showModal } from '@u/modal';
import packageInfo from '../../package.json';

const reLaunchCodes = new Set(['YOUR_RELAUNCH_CODE']);

const request = ajax.create({
  baseURL: 'https://your.url.here',
  header: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'X-Version': `boilerplate-uni-app/${packageInfo.version}`,
  },
  sslVerify: false,
});

// 添加请求拦截器
request.interceptors.request.use((config) => ({
  ...config,
  token: getToken(),
}));

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // if (process.env.NODE_ENV === 'development') {
    //   console.log('response', response.config.url.slice(33), response.data);
    // }
    if (reLaunchCodes.has(response.code)) {
      showModal({
        content: '请重新登录。',
        success: () => {
          uni.clearStorageSync();
          uni.reLaunch({
            url: '/pages/index',
          });
        },
      });
    }
    return response.data;
  },
  (error) => {
    // if (process.env.NODE_ENV === 'development') {
    //   console.log('error', error);
    // }
    const customError = {
      success: false,
      code: '',
      message: '',
    };
    if (error.errMsg.toLowerCase().includes('timeout')) {
      customError.message = '请求时间过长，请检查网络，稍后再试。';
    } else if (
      error.statusCode < 200 ||
      (error.statusCode >= 300 && error.statusCode !== 304)
    ) {
      // 发送了请求，响应超出范围 [200, 300) ∪ 304
      customError.code = error.statusCode;
      switch (error.statusCode) {
        case 403:
          customError.message =
            '不能访问请求的内容，请联系维护并提供相关信息，谢谢。';
          break;
        case 404:
          customError.message =
            '请求内容不存在，请联系维护并提供相关信息，谢谢。';
          break;
        case 500:
          customError.message = '服务器内部发生错误，请稍后再试。';
          break;
        default:
          break;
      }
    } else if (Object.keys(error.data).length === 0) {
      // 发送了请求，没有收到响应
      customError.message = '服务器无响应，请稍后再试。';
    } else {
      // 请求时发生错误
      customError.message =
        '请求内容发生了问题，请联系维护并提供相关信息，谢谢。';
    }
    return customError;
  },
);

Vue.prototype.$request = request;

export default request;
