export function showLoading({
  title = '加载中，请稍候',
  mask = true,
  success = () => {},
  fail = () => {},
  complete = () => {},
} = {}) {
  uni.showLoading({
    title,
    mask,
    success,
    fail,
    complete,
  });
  return () => {
    uni.hideLoading();
  };
}

export function hideLoading() {
  uni.hideLoading();
}
