import Vue from 'vue';
import ajax from 'uni-ajax';
import i18n from '@/i18n';
import { getToken } from '@u/storage';
import { showModal } from '@u/modal';
import packageInfo from '../../package.json';

// https://uniajax.ponjs.com/
// 要取消请求，参考 https://uniajax.ponjs.com/usage.html#requesttask

const reLaunchCodes = new Set(['TOKEN_OUTDATED']);

const objectStatusCode = {
  400: 'BAD_REQUEST',
  401: 'UNAUTHORIZED',
  403: 'FORBIDDEN',
  404: 'NOT_FOUND',
  405: 'METHOD_NOT_ALLOWED',
  406: 'NOT_ACCEPTABLE',
  407: 'PROXY_AUTHENTICATION_REQUIRED',
  408: 'REQUEST_TIMEOUT',
  409: 'CONFLICT',
  410: 'GONE',
  411: 'LENGTH_REQUIRED',
  412: 'PRECONDITION_FAILED',
  413: 'PAYLOAD_TOO_LARGE',
  414: 'URI_TOO_LONG',
  415: 'UNSUPPORTED_MEDIA_TYPE',
  416: 'RANGE_NOT_SATISFIABLE',
  417: 'EXPECTATION_FAILED',
  421: 'MISDIRECTED_REQUEST',
  422: 'UNPROCESSABLE_ENTITY',
  423: 'LOCKED',
  424: 'FAILED_DEPENDENCY',
  426: 'UPGRADE_REQUIRED',
  428: 'PRECONDITION_REQUIRED',
  429: 'TOO_MANY_REQUESTS',
  431: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  451: 'UNAVAILABLE_FOR_LEGAL_REASONS',
  500: 'INTERNAL_SERVER_ERROR',
  501: 'NOT_IMPLEMENTED',
  502: 'BAD_GATEWAY',
  503: 'SERVICE_UNAVAILABLE',
  504: 'GATEWAY_TIMEOUT',
  505: 'HTTP_VERSION_NOT_SUPPORTED',
  506: 'VARIANT_ALSO_NEGOTIATES',
  507: 'INSUFFICIENT_STORAGE',
  508: 'LOOP_DETECTED',
  510: 'NOT_EXTENDED',
  511: 'NETWORK_AUTHENTICATION_REQUIRED',
};

/**
 * @param {number} statusCode
 */
const handleValidateStatusCode = (statusCode) =>
  (statusCode >= 200 && statusCode < 300) || statusCode === 304;

const handleShowError = (response) => {
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
        message: i18n.t('error.REQUEST_CANCELLED'),
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
      response.message = objectStatusCode[error.statusCode]
        ? i18n.t(`error.${objectStatusCode[error.statusCode]}`)
        : i18n.t('error.ERROR_OCCURRED');
      response.code = error.statusCode;
    } else if (
      error.errMsg.toUpperCase().includes('TIMEOUT') ||
      error.errMsg.toUpperCase().includes('CONNRESET')
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
    handleShowError(response);
    return response;
  },
);

Vue.prototype.$request = instance;

export default instance;
