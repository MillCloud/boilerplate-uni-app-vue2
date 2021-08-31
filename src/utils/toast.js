export function showToast({
  title = '',
  icon = 'none',
  image = '',
  mask = false,
  duration = 1500,
  success = () => {},
  fail = () => {},
  complete = () => {},
} = {}) {
  uni.showToast({
    title,
    icon,
    image,
    mask,
    duration,
    success,
    fail,
    complete,
  });
  return () => {
    uni.hideToast();
  };
}

export function hideToast() {
  uni.hideToast();
}
