<template>
  <div class="detailNavBar">
    <nav-bar>
      <div slot="left" class="backImg" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div class="title" slot="center">
        <div
          v-for="(item, index) in title"
          :key="item"
          class="title-item"
          :class="{ active: currentIndex === index }"
          @click="titleItemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    navBar
  },
  methods: {
    titleItemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
      // this.$router.go(-1)
    }
  }
};
</script>
<style scoped>
.title {
  display: flex;
  font-weight: bold;
}
.title-item {
  flex: 1;
}
.active {
  color: pink;
}
.backImg {
  height: 44px;
  position: relative;
}
.backImg img {
  display: block;
  position: absolute;
  top: 10px;
  left: 13px;
}
</style>
