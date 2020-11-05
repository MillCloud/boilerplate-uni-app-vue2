<template>
  <view class="content">
    <image
      class="logo"
      src="/static/logo.png"
    />
    <view>
      <text class="title">
        {{ title }}
      </text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
