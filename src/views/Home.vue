<template>
  <div class="page">
    <Header />
    <div class="page-top" :style="`background-image:url(${HomeDefaultBg})`">
      <el-input class="search-bar" placeholder="请输入机型" v-model="content">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="page-btm"></div>
  </div>
</template>

<script>
import HomeDefaultBg from "@/assets/images/home-default-bg.jpg";
import Header from "@/components/layouts/Header.vue";

export default {
  components: { Header },
  data() {
    return {
      HomeDefaultBg,
      content: "",
    };
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
    .search-bar {
      width: 650px;
    }
  }
}
</style>
