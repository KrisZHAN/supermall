<template>
  <div id="home">
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :title="title"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scrollY="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <recommend-view :recommend="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :title="title"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <!-- 回到顶部组件 -->
    <back-top @click.native="backtopClick" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
import homeSwiper from "./childComps/HomeSwiper";
import recommendView from "./childComps/RecommendView";
import featureView from "./childComps/FeatureView";

import tabControl from "components/content/tabControl/tabControl";
import goodsList from "components/content/goods/GoodList";
import scroll from "components/common/scroll/Scroll";
import backTop from "components/content/backTop/BackTop";
import { getHomeRequest, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      title: ["流行", "新歌", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      // 回到顶部的显示与隐藏
      showBackTop: false,
      // tabControl距离顶部的距离
      tabOffsetTop: 0,
      // tabControl的固定定位
      isTabFixed: false,
      // home页面滚动的高度
      saveY: 0
    };
  },
  components: {
    navBar,
    homeSwiper,
    recommendView,
    featureView,
    tabControl,
    goodsList,
    scroll,
    backTop
  },
  created() {
    // 轮播图数据请求
    this.getHomeRequest();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听图片加载完成
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
  },

  methods: {
    // 以下是监听子组件的相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // 保持tabControl1和tabControl2样式一致
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    // 图片加载防抖操作
    debounce(fn, delay) {
      let timer;
      return function(...arrys) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arrys);
        }, delay);
      };
    },
    // 监听上拉加载更多
    loadMore() {
      // console.log("ksafdajfjasdfjkas");
      this.getHomeGoods(this.currentType);
    },
    // 监听滚动的距离
    contentScroll(position) {
      // 回到顶部的显示与隐藏
      this.showBackTop = -position.y > 1000;

      // tabControl 何时固定
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    // 监听轮播图图片加载完成
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // 以下是网络请求数据的相关方法
    // 轮播图数据请求
    getHomeRequest() {
      getHomeRequest().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          // 上拉加载功能
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 点击回到顶部
    backtopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    // 设置切换页面的时候前一个页面保持位置不变
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 当前页面失去活跃时，获取当前滚动的高度
    this.saveY = this.$refs.scroll.getScrollY();
  }
};
</script>
<style scoped>
#home {
  /* padding-top: 44px; */
  /* vh: 视口 */
  height: 100vh;
  position: relative;
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: white;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: bold;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100; */
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control {
  position: relative;
  z-index: 10;
}
</style>
