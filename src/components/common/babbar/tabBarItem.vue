<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-show="!isActive"><slot name="tab-bar-item-icon"></slot></div>
    <div v-show="isActive"><slot name="tab-bar-item-active-icon"></slot></div>
    <div :style="activeStyle">
      <slot name="tab-bar-item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {};
  },
  computed: {
    // 动态改变图片活跃状态
    isActive() {
      // 动态判断isActive 的true和false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    // 动态改变字体活跃颜色
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
</style>
