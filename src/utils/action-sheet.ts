export function showActionSheet(
  {
    itemList = [],
    itemColor = '#000',
    popover,
    success = () => {},
    fail = () => {},
    complete = () => {},
  } = {} as UniApp.ShowActionSheetOptions,
) {
  uni.showActionSheet({
    itemList,
    itemColor,
    popover,
    success,
    fail,
    complete,
  });
}
