/* eslint-disable import/prefer-default-export */
// 整包更新见 https://ask.dcloud.net.cn/article/34972
// 热更新见 https://ask.dcloud.net.cn/article/35667
import request from '../plugins/request';
import { hideLoading, showLoading } from './loading';
import { showModal } from './modal';
import manifest from '../manifest.json';

export const getUpdate = ({ hasLoading = false, hasModal = false } = {}) => {
  if (hasLoading) {
    showLoading();
  }
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
                success: (result) => {
                  if (result.statusCode === 200) {
                    plus.runtime.install(
                      result.tempFilePath,
                      { force: false },
                      () => {
                        if (hasLoading) {
                          hideLoading();
                        }
                        if (hasModal) {
                          showModal({
                            content: '新版本应用已经准备完毕，请重启应用。',
                            complete: () => {
                              plus.runtime.restart();
                            },
                          });
                        }
                      },
                      () => {
                        if (hasLoading) {
                          hideLoading();
                        }
                        if (hasModal) {
                          showModal({
                            content: '新版本应用安装失败，请稍候再试。',
                          });
                        }
                      },
                    );
                  }
                },
              });
            } else {
              // 整包更新
              showModal({
                content: `新版本需要手动下载，更新信息：${response.data.note}。`,
                success: (result) => {
                  if (result.confirm) {
                    plus.runtime.openURL(response.data.pkg_url);
                  }
                },
              });
            }
          } else {
            // 没有更新
            if (hasLoading) {
              hideLoading();
            }
            if (hasModal) {
              showModal({
                content: '已经是最新版本。',
              });
            }
          }
        } else {
          // 请求失败
          if (hasLoading) {
            hideLoading();
          }
          if (hasModal) {
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
        }
      });
  });
};
