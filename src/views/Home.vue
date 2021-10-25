<template>
  <div class="page">
    <div class="page-top" :style="`background-image:url(${HomeDefaultBg})`">
      <el-input
        @change="handleSearch"
        class="search-bar"
        placeholder="请输入机型"
        v-model="content"
      >
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="page-btm">
      <div
        class="search-banner"
        v-if="content"
        :style="`background-image:url(${LongBanner})`"
      >
        <j-icon type="phone-iphone" :size="24"></j-icon>
        {{ content }}
      </div>
      <div class="card-list">
        <template v-for="(item, i) in uaList">
          <UACard :key="i" :data="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import HomeDefaultBg from "@/assets/images/home-default-bg.jpg";
import LongBanner from "@/assets/images/long-banner.jpg";
import UACard from "@/components/UACard.vue";

export default {
  components: {
    UACard,
  },
  data() {
    return {
      HomeDefaultBg,
      content: "",
      uaList: [],
      LongBanner,
    };
  },
  computed: {
    uaMap() {
      return this.$store.getters.uaMap;
    },
  },
  methods: {
    handleSearch() {
      if (this.content) {
        this.uaList = Object.values(this.uaMap[this.content]);
      }
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
    .search-bar {
      width: 650px;
    }
  }
  &-btm {
    padding: 40px 50px;
    .card-list {
      display: flex;
      justify-items: center;
      margin: 0 -20px;
    }

    .search-banner {
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      border-radius: 20px;
      width: 100%;
      height: 120px;
      color: #fff;
      margin-bottom: 20px;
      .box-shadow__float();
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #fff;
        border-radius: 20px;
        opacity: 0.3;
      }
    }
  }
}
</style>
