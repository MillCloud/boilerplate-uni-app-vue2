<template>
  <view class="absolute flex h-full w-full flex-col items-center justify-center">
    <image class="h-12 w-12" src="/static/logo.png" />
    <text class="text-2xl">
      {{ title }}
    </text>
    <!-- #ifdef APP-PLUS -->
    <button class="bg-blue-6 px-8 text-base leading-loose text-white" @click="handleToPermission">
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
