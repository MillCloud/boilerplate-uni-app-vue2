export function showActionSheet({
  itemList = [],
  itemColor = '#000',
  popover,
  success = () => {},
  fail = () => {},
  complete = () => {},
} = {}) {
  uni.showActionSheet({
    itemList,
    itemColor,
    popover,
    success,
    fail,
    complete,
  });
}
