<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  onLaunch() {},
  onShow() {},
  onHide() {},
});
</script>

<!-- <script setup lang="ts">
import { onLaunch, onShow, onHide } from 'uni-composition-api';

onLaunch(() => {});

onShow(() => {});

onHide(() => {});
</script> -->

<style lang="scss">
@import './styles/variables';
@import './styles/preflight';
@import './styles/tailwind';
@import url('https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css');
@import './styles/global';
</style>
