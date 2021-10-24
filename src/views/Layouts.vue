<template>
  <div class="page">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header.vue";

export default {
  components: { Header },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
