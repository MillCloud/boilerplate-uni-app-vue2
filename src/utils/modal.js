/* eslint-disable import/prefer-default-export */
export function showModal({
  title = '提示',
  content = '',
  showCancel = false,
  confirmColor = '#d30a0a',
  success = () => {},
  fail = () => {},
  complete = () => {},
} = {}) {
  uni.showModal({
    title,
    content,
    showCancel,
    confirmColor,
    success,
    fail,
    complete,
  });
}
