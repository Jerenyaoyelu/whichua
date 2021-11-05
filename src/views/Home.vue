<template>
  <div class="page">
    <div class="page-top" :style="`background-image:url(${HomeDefaultBg})`">
      <SearchBar />
    </div>
    <div class="page-btm">
      <div class="main">
        <CategoryNav class="cate-nav" @onChange="handleChange" />
        <div class="card-list">
          <template v-for="(d, i) in list">
            <UACard :key="`card-${i}`" :data="d" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeDefaultBg from "@/assets/images/home-banner-bg.gif";
import SearchBar from "@/components/SearchBar.vue";
import CategoryNav from "@/components/CategoryNavCard.vue";
import UACard from "@/components/UACard.vue";

export default {
  data() {
    return {
      HomeDefaultBg,
      list: [],
    };
  },
  components: {
    SearchBar,
    CategoryNav,
    UACard,
  },
  methods: {
    handleChange(v) {
      this.list = v;
    },
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
    background-position-y: center;
  }
  &-btm {
    padding: 40px 50px;
  }

  .card-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px -10px 0px;
  }

  .main {
    width: 1246px;
    margin: 0 auto;
    position: relative;
    padding-top: 114px;
    .cate-nav {
      position: absolute;
      top: 0px;
    }
  }
}
</style>
