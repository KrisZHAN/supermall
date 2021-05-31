<template>
  <div id="detail">
    <!-- 导航 -->
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import detailNavBar from "./childComps/DetailNavBar";
import detailSwiper from "./childComps/DetailSwiper";

import { getDetail } from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    // 保存当前页面的iid
    this.iid = this.$route.params.iid;
    console.log(this.iid);

    // 根据iid请求数据
    getDetail(this.iid)
      .then(res => {
        // 获取项目的图片轮播数据
        console.log(res.result.itemInfo);
        this.topImages = res.result.itemInfo.topImages;
      })
      .catch(er => {
        console.log(err);
      });
  },
  components: {
    detailNavBar,
    detailSwiper
  }
};
</script>
<style scoped></style>
