// 整包更新见 https://ask.dcloud.net.cn/article/34972
// 热更新见 https://ask.dcloud.net.cn/article/35667
import request from '@/plugins/request';
import { hideLoading, showLoading } from './loading';
import { showModal } from './modal';
import manifest from '../manifest.json';

export const getUpdate = ({ hasLoading = false } = {}) => {
  if (hasLoading) {
    showLoading({
      title: '更新中，请稍候',
    });
  }
  const { platform } = uni.getSystemInfoSync();
  plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
    request
      .get('/your-url-here', {
        platform: uni.getSystemInfoSync().platform,
        app_id: widgetInfo.appid.includes('HBuilder')
          ? manifest.appid
          : widgetInfo.appid,
        version: widgetInfo.version,
      })
      .then((response) => {
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
                          complete: () => {
                            plus.runtime.restart();
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
                          complete: () => {
                            plus.runtime.restart();
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
            content: `无法检查更新，相关信息：${response.message}，是否重试？`,
            showCancel: true,
            success: (result) => {
              if (result.confirm) {
                getUpdate();
              }
            },
          });
        }
      });
  });
};
