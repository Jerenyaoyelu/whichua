<template>
  <div class="page">
    <div class="page-top" :style="`background-image:url(${HomeDefaultBg})`">
      <SearchBar />
    </div>
    <div class="page-btm"></div>
  </div>
</template>

<script>
import HomeDefaultBg from "@/assets/images/home-default-bg.jpg";
import SearchBar from "@/components/SearchBar.vue";

export default {
  data() {
    return {
      HomeDefaultBg,
    };
  },
  components: {
    SearchBar,
  },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  &-top {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-btm {
    padding: 40px 50px;
  }
}
</style>
