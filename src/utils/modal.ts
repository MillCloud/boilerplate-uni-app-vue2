export function showModal(
  {
    title = '提示',
    content = '',
    showCancel = false,
    cancelText = '取消',
    confirmColor,
    confirmText = '确定',
    success = () => {},
    fail = () => {},
    complete = () => {},
  } = {} as UniApp.ShowModalOptions,
) {
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
