<template>
  <view class="absolute flex flex-col items-center justify-center w-full h-full">
    <image class="w-12 h-12" src="/static/logo.png" />
    <text class="text-2xl">
      {{ title }}
    </text>
    <!-- #ifdef APP-PLUS -->
    <button class="px-8 text-base leading-loose text-white bg-blue-6" @click="handleToPermission">
      测试权限
    </button>
    <!-- #endif -->
  </view>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: 'Hello, uni-app!',
    };
  },
  // #ifdef APP-PLUS
  methods: {
    handleToPermission() {
      uni.navigateTo({
        url: '/pages/permission/index',
      });
    },
  },
  // #endif
};
</script>
