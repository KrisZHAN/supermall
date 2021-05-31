<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  props: {
    // 动态绑定probeType
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  // 挂载到页面上的时候，因为BScroll要获取dom
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    // 监听滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scrollY", position);
      });
    }

    // 监听scroll滚到底部
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        console.log("监听滚到底部");
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      // BScroll的scrollTo方法
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 完成下拉加载更多（才能继续下一次） scroll默认只能上拉加载一次
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },

    refresh() {
      console.log("kkk");
      this.scroll && this.scroll.refresh();
    },

    // 页面滚动Y的高度
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>
<style scoped></style>
