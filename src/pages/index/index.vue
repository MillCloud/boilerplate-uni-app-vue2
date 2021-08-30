<template>
  <view
    class="absolute w-full h-full flex flex-col justify-center items-center"
  >
    <image class="w-12 h-12" src="/static/logo.png" />
    <text class="text-2xl">
      {{ title }}
    </text>
    <!-- #ifdef APP-PLUS -->
    <button
      class="bg-blue-6 px-8 text-white text-base leading-loose"
      @click="handleToPermission"
    >
      测试权限
    </button>
    <!-- #endif -->
  </view>
</template>

<script>
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
