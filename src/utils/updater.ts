// 小程序更新见 https://uniapp.dcloud.io/api/other/update?id=getupdatemanager
// 整包更新见 https://ask.dcloud.net.cn/article/34972
// 热更新见 https://ask.dcloud.net.cn/article/35667
import manifest from '@/manifest.json';
import { request } from './request';
import { hideLoading, showLoading } from './loading';
import { showModal } from './modal';

export const getUpdate = ({ hasLoading = false } = {}) => {
  /* #ifdef MP */
  const updater = uni.getUpdateManager();
  updater.onCheckForUpdate((result) => {
    if (!result.hasUpdate) {
      if (hasLoading) {
        showModal({
          content: '已经是最新版本。',
        });
      }
      return;
    }
    updater.onUpdateReady(() => {
      showModal({
        content: '新版本应用已经准备完毕，请重启应用。',
        success: ({ confirm }) => {
          if (confirm) {
            updater.applyUpdate();
          }
        },
      });
    });
  });
  /* #endif */
  /* #ifdef APP-PLUS */
  if (hasLoading) {
    showLoading({
      title: '更新中，请稍候',
    });
  }
  const { platform } = uni.getSystemInfoSync();
  plus.runtime.getProperty(plus.runtime.appid || '', (widgetInfo) => {
    request<IResponse, IResponse>({
      url: '/version-update',
      data: {
        platform,
        app_id:
          widgetInfo.appid && widgetInfo.appid.includes('HBuilder')
            ? manifest.appid
            : widgetInfo.appid,
        version: widgetInfo.version,
      },
      custom: { showError: false },
    }).then((response) => {
      if (response.success) {
        // 请求成功
        // 注意修改对应的字段
        if (response.data.update) {
          // 有更新
          if (response.data.hot_url) {
            // 热更新
            uni.downloadFile({
              url: response.data.hot_url,
              success: ({ tempFilePath, statusCode }) => {
                if (statusCode === 200) {
                  plus.runtime.install(
                    tempFilePath,
                    { force: false },
                    () => {
                      if (hasLoading) {
                        hideLoading();
                      }
                      showModal({
                        content: '新版本应用已经准备完毕，请重启应用。',
                        success: ({ confirm }) => {
                          if (confirm) {
                            plus.runtime.restart();
                          }
                        },
                      });
                    },
                    () => {
                      if (hasLoading) {
                        hideLoading();
                        showModal({
                          content: '新版本应用安装失败，请稍候再试。',
                        });
                      }
                    },
                  );
                }
              },
            });
          } else if (platform === 'ios') {
            // iOS 整包更新需要打开 AppStore 引导用户更新
            // 注意填写
            plus.runtime.openURL('itms-apps://apps.apple.com/cn/app/');
          } else {
            // Android 整包更新可直接获取并安装
            uni.downloadFile({
              url: response.data.pkg_url,
              success: ({ tempFilePath, statusCode }) => {
                if (statusCode === 200) {
                  plus.runtime.install(
                    tempFilePath,
                    { force: false },
                    () => {
                      if (hasLoading) {
                        hideLoading();
                      }
                      showModal({
                        content: '新版本应用已经准备完毕，请重启应用。',
                        success: ({ confirm }) => {
                          if (confirm) {
                            plus.runtime.restart();
                          }
                        },
                      });
                    },
                    () => {
                      if (hasLoading) {
                        hideLoading();
                        showModal({
                          content: '新版本应用安装失败，请稍候再试。',
                        });
                      }
                    },
                  );
                }
              },
            });
          }
        } else if (hasLoading) {
          // 没有更新
          hideLoading();
          showModal({
            content: '已经是最新版本。',
          });
        }
      } else if (hasLoading) {
        // 请求失败
        hideLoading();
        showModal({
          content: `无法检查更新，错误代码：${response.code}，错误信息：${response.message}，是否重试？`,
          showCancel: true,
          success: ({ confirm }) => {
            if (confirm) {
              getUpdate();
            }
          },
        });
      }
    });
  });
  /* #endif */
};
