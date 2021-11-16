<template>
  <div class="page-content">
    <img class="banner" src="../assets/images/ad-banner.png" />
    <CategoryNav class="cate-nav" @onChange="handleChange" />
    <div class="card-list">
      <template v-for="(d, i) in list">
        <UACard :key="`card-${i}`" :data="d" />
      </template>
    </div>
  </div>
</template>

<script>
import CategoryNav from "@/components/CategoryNavCard.vue";
import UACard from "@/components/UACard.vue";

export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
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
.page-content {
  padding: 30px 17px;
  .banner {
    width: 100%;
    height: 300px;
  }
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -10px 0px;
}
</style>
