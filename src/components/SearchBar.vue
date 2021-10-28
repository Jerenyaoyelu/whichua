<template>
  <el-autocomplete
    :style="`width: ${width}px`"
    v-model="content"
    :fetch-suggestions="querySearch"
    placeholder="请输入手机品牌"
    @select="handleSelect"
    @change="handleSearch"
  >
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-autocomplete>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 650,
    },
  },
  data() {
    return {
      content: "",
      uaList: [],
    };
  },
  created() {
    const { key } = this.$route.params;
    if (key) this.content = key;
    Object.keys(this.$store.getters.uaMap).forEach((item) => {
      this.uaList.push({
        value: item,
      });
    });
  },
  methods: {
    handleSearch() {
      if (this.content) {
        // 搜索页面下当前key相同则不触发
        const { name, params } = this.$route;
        if (name !== "Search" || params.key !== this.content) {
          this.$router.push({
            name: "Search",
            params: {
              key: this.content,
            },
          });
        }
      }
    },
    handleSelect(item) {
      this.content = item.value;
      this.handleSearch();
    },
    querySearch(queryString, cb) {
      var results = queryString
        ? this.uaList.filter(this.createFilter(queryString))
        : this.uaList;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (item) => {
        return (
          item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
  },
};
</script>
