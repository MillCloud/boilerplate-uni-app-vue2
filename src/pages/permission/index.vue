<template>
  <view class="container flex-col items-center">
    <scroll-view class="w-full h-full" scroll-y enable-flex>
      <view class="row">
        注意：服务和权限是不同的概念。服务指手机硬件和系统提供的功能，权限指手机给予应用的功能。比如定位，如果手机允许了应用的定位权限，但手机没有开启定位服务，应用可以定位但没办法获取正确的数据，或者直接无法定位。
      </view>
      <view class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckSystemEnableLocation"
        >
          Android, iOS - 是否开启定位服务
        </button>
      </view>
      <view class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleOpenPermissionSetting"
        >
          Android, iOS - 打开应用权限页面
        </button>
      </view>
      <view v-if="isIOS" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckIOSLocationPermission"
        >
          iOS - 是否开启位置权限
        </button>
      </view>
      <view v-if="isIOS" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckIOSPushPermission"
        >
          iOS - 是否开启推送权限
        </button>
      </view>
      <view v-if="isIOS" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckIOSCameraPermission"
        >
          iOS - 是否开启摄像头权限
        </button>
      </view>
      <view v-if="isIOS" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckIOSPhotoLibraryPermission"
        >
          iOS - 是否开启相册权限
        </button>
      </view>
      <view v-if="isIOS" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckIOSRecordPermission"
        >
          iOS - 是否开启麦克风权限
        </button>
      </view>
      <view v-if="isIOS" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckIOSContactPermission"
        >
          iOS - 是否开启通讯录权限
        </button>
      </view>
      <view v-if="isIOS" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckIOSCalendarPermission"
        >
          iOS - 是否开启日历权限
        </button>
      </view>
      <view v-if="isIOS" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckIOSMemoPermission"
        >
          iOS - 是否开启备忘录权限
        </button>
      </view>
      <view v-if="isAndroid" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckAndroidNotExistPermission"
        >
          Android - 是否开启不存在权限
        </button>
      </view>
      <view v-if="isAndroid" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckAndroidCameraPermission"
        >
          Android - 是否开启摄像头权限
        </button>
      </view>
      <view v-if="isAndroid" class="row">
        <button
          class="bg-blue-6 px-8 text-white text-base leading-loose"
          @click="handleCheckAndroidMultiPermissions"
        >
          Android - 是否开启摄像头、位置和麦克风权限
        </button>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import {
  isIOS,
  judgeIOSPermission,
  requestAndroidPermission,
  requestAndroidPermissions,
  gotoAppPermissionSetting,
  checkSystemEnableLocation,
} from '@/utils';

export default {
  data() {
    return {
      isIOS,
    };
  },
  computed: {
    isAndroid() {
      return !this.isIOS;
    },
  },
  methods: {
    handleCheckSystemEnableLocation() {
      const result = checkSystemEnableLocation();
      uni.showToast({
        title: `定位服务${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleOpenPermissionSetting() {
      gotoAppPermissionSetting();
    },
    handleCheckIOSLocationPermission() {
      const result = judgeIOSPermission('location');
      uni.showToast({
        title: `位置权限${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleCheckIOSPushPermission() {
      const result = judgeIOSPermission('push');
      uni.showToast({
        title: `推送权限${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleCheckIOSCameraPermission() {
      const result = judgeIOSPermission('camera');
      uni.showToast({
        title: `摄像头权限${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleCheckIOSPhotoLibraryPermission() {
      const result = judgeIOSPermission('photoLibrary');
      uni.showToast({
        title: `相册权限${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleCheckIOSRecordPermission() {
      const result = judgeIOSPermission('record');
      uni.showToast({
        title: `麦克风权限${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleCheckIOSContactPermission() {
      const result = judgeIOSPermission('contact');
      uni.showToast({
        title: `通讯录权限${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleCheckIOSCalendarPermission() {
      const result = judgeIOSPermission('calendar');
      uni.showToast({
        title: `日历权限${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleCheckIOSMemoPermission() {
      const result = judgeIOSPermission('memo');
      uni.showToast({
        title: `备忘录权限${result ? '已' : '未'}开启`,
        icon: 'none',
      });
    },
    handleCheckAndroidNotExistPermission() {
      requestAndroidPermission('android.permission.NOT_EXIST').then(
        (result) => {
          if (result.message) {
            uni.showModal({
              title: '提示',
              content: `无法确认不存在权限，${result.code} ${result.message}`,
              showCancel: false,
            });
          } else {
            let text = '不存在权限状态不明';
            switch (result) {
              case 1:
                text = '不存在权限已开启';
                break;
              case 0:
                text = '不存在权限未开启';
                break;
              case -1:
                text = '不存在权限被永久拒绝';
                break;
              default:
                break;
            }
            uni.showToast({
              title: text,
              icon: 'none',
            });
          }
        },
      );
    },
    handleCheckAndroidCameraPermission() {
      requestAndroidPermission('android.permission.CAMERA').then((result) => {
        if (result.message) {
          uni.showModal({
            title: '提示',
            content: `无法确认摄像头权限，${result.code} ${result.message}`,
            showCancel: false,
          });
        } else {
          let text = '摄像头权限状态不明';
          switch (result) {
            case 1:
              text = '摄像头权限已开启';
              break;
            case 0:
              text = '摄像头权限未开启';
              break;
            case -1:
              text = '摄像头权限被永久拒绝';
              break;
            default:
              break;
          }
          uni.showToast({
            title: text,
            icon: 'none',
          });
        }
      });
    },
    handleCheckAndroidMultiPermissions() {
      requestAndroidPermissions([
        'android.permission.CAMERA',
        'android.permission.ACCESS_FINE_LOCATION',
        'android.permission.RECORD_AUDIO',
      ]).then((results) => {
        if (results.message) {
          uni.showModal({
            title: '提示',
            content: `无法确认权限，${results.code} ${results.message}`,
            showCancel: false,
          });
        } else {
          let text1 = `摄像头权限状态不明`;
          switch (results[0]) {
            case 1:
              text1 = '摄像头权限已开启';
              break;
            case 0:
              text1 = '摄像头权限未开启';
              break;
            case -1:
              text1 = '摄像头权限被永久拒绝';
              break;
            default:
              break;
          }
          let text2 = `位置权限状态不明`;
          switch (results[1]) {
            case 1:
              text2 = '位置权限已开启';
              break;
            case 0:
              text2 = '位置权限未开启';
              break;
            case -1:
              text2 = '位置权限被永久拒绝';
              break;
            default:
              break;
          }
          let text3 = `麦克风权限状态不明`;
          switch (results[2]) {
            case 1:
              text3 = '麦克风权限已开启';
              break;
            case 0:
              text3 = '麦克风权限未开启';
              break;
            case -1:
              text3 = '麦克风权限被永久拒绝';
              break;
            default:
              break;
          }
          uni.showModal({
            title: '提示',
            content: `${text1}；${text2}；${text3}。`,
            showCancel: false,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  justify-content: center;
  padding: 20rpx;
}
</style>
