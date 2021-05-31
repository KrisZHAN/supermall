<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="tab-bar-item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="tab-bar-item-active-icon"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categroy" activeColor="blue">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/category.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-active-icon"
        src="~assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="green">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/shopcart.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-active-icon"
        src="~assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="yellow">
      <img
        slot="tab-bar-item-icon"
        src="~assets/img/tabbar/profile.svg"
        alt=""
      />
      <img
        slot="tab-bar-item-active-icon"
        src="~assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="tab-bar-item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "components/common/babbar/tabbar";
import tabBarItem from "components/common/babbar/tabBarItem";
export default {
  data() {
    return {};
  },
  components: {
    tabBar,
    tabBarItem
  }
};
</script>
<style scoped></style>
