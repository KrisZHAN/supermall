<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :goods-item="item"
      :key="index"
    ></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "./GoodListItem";
export default {
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    goodsListItem
  }
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
