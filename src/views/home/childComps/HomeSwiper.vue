<template>
  <div>
    <Swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad" />
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  data() {
    return {
      isImgLoad: false
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      if (!this.isImgLoad) {
        this.$emit("swiperImgLoad");
        this.isImgLoad = true;
      }
    }
  }
};
</script>
<style scoped></style>
