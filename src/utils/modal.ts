export function showModal(
  {
    title = '提示',
    content = '',
    showCancel = false,
    cancelColor = '#000000',
    cancelText = '取消',
    confirmColor = '#1890ff',
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
    cancelColor,
    cancelText,
    confirmColor,
    confirmText,
    success,
    fail,
    complete,
  });
}
