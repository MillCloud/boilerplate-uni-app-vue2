// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ajax from 'uni-ajax';

declare module 'uni-ajax' {
  interface AjaxRequestConfig {
    showError?: boolean;
  }
}
