<template>
  <div class="page">
    <div class="keyword">
      <span @click="handleClick('')">{{ keyword }}</span>
    </div>
    <div class="sub-keyword">
      <template v-for="(sk, i) in subKeys">
        <el-button @click="handleClick(sk)" :key="i">{{ sk }}</el-button>
      </template>
    </div>
    <div class="res-list">
      <UACard v-for="(item, i) in list" :key="i" :data="item" />
    </div>
  </div>
</template>

<script>
import UACard from "@/components/UACard.vue";

export default {
  components: {
    UACard,
  },
  data() {
    return {
      subKey: "",
    };
  },
  watch: {
    $route: {
      handler() {
        this.subKey = "";
      },
    },
  },
  computed: {
    keyword() {
      return this.$route.params.key;
    },
    uaMap() {
      return this.$store.getters.uaMap;
    },
    mappedResult() {
      return this.uaMap[this.keyword] || {};
    },
    subKeys() {
      return Object.keys(this.mappedResult);
    },
    list() {
      if (this.subKey) {
        return this.mappedResult[this.subKey] || [];
      }
      let res = [];
      Object.keys(this.mappedResult).forEach((k) => {
        res = [...res, ...this.mappedResult[k]];
      });
      return res;
    },
  },
  methods: {
    handleClick(k) {
      this.subKey = k;
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  background: #fff;
  width: 1320px;
  margin: 0 auto;
  padding: 50px 20px;
  .keyword {
    text-align: left;
    font-size: 46px;
    line-height: 1.2;
    font-family: -apple-system, BlinkMacSystemFont, San Francisco,
      Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial,
      sans-serif;
    margin-bottom: 16px;
    span {
      .clickable();
    }
  }

  .sub-keyword {
    display: flex;
    align-items: center;
    max-width: 100%;
    flex-wrap: wrap;
    margin: 0 -4px;
    button {
      margin: 0 4px;
    }
  }

  .res-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px -10px 0px;
  }
}
</style>
