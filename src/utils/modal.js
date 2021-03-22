/* eslint-disable import/prefer-default-export */
export function showModal({
  title = '提示',
  content = '',
  showCancel = false,
  cancelText = '取消',
  confirmColor = '#d30a0a',
  confirmText = '确定',
  success = () => {},
  fail = () => {},
  complete = () => {},
} = {}) {
  uni.showModal({
    title,
    content,
    showCancel,
    cancelText,
    confirmColor,
    confirmText,
    success,
    fail,
    complete,
  });
}
