<template>
  <div class="wrapper">
    <div :class="['cate-item', brand.length ? '' : 'margin-btm']">
      <label class="cate-name">品牌:</label>
      <div class="item-list">
        <template v-for="(b, i) in brand">
          <div
            :class="['tag', b === curBrand ? 'current' : '']"
            :key="`brand-${i}`"
            @click="curBrand = b"
          >
            {{ b }}
          </div>
        </template>
      </div>
    </div>
    <div :class="['cate-item', device.length ? '' : 'margin-btm']">
      <label class="cate-name">型号:</label>
      <div class="item-list">
        <template v-for="(d, i) in device">
          <div
            :class="['tag', d === curDevice ? 'current' : '']"
            :key="`device-${i}`"
            @click="curDevice = d"
          >
            {{ d }}
          </div>
        </template>
      </div>
    </div>
    <div class="cate-item">
      <label class="cate-name">浏览器:</label>
      <div class="item-list">
        <template v-if="!browser.length">
          <div class="tag">
            无
          </div>
        </template>
        <template v-else>
          <template v-for="(br, i) in browser">
            <div
              :class="['tag', br === curBrowser ? 'current' : '']"
              :key="`browser-${i}`"
              @click="curBrowser = br"
            >
              {{ br }}
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import dataMixin from "@/components/mixins";

export default {
  mixins: [dataMixin],
  data() {
    return {
      curBrand: "全部",
      curDevice: "全部",
      curBrowser: "",
      list: [],
    };
  },
  created() {
    this.updateData();
  },
  watch: {
    curBrand(v, ov) {
      if (v === "全部") {
        this.curDevice = "全部";
      }
      if (v !== ov) {
        this.updateData();
      }
    },
    curDevice(v) {
      if (v !== "全部") {
        this.updateBrand();
        this.updateData();
      }
    },
    curBrowser(v) {
      if (v) {
        this.updateData();
      }
    },
    list: {
      handler(v) {
        this.$emit("onChange", v);
      },
      immediate: true,
    },
  },
  computed: {
    brand() {
      return ["全部", ...Object.keys(this.uaMap)];
    },
    device() {
      let res = [];
      Object.values(this.uaMap).forEach((item) => {
        res = [...res, ...Object.keys(item)];
      });
      return ["全部", ...res];
    },
    browser() {
      const res = [];
      if (this.curBrand !== "全部" && this.curDevice !== "全部") {
        (this.uaMap[this.curBrand][this.curDevice] || []).forEach((item) => {
          if (!res.includes(item.browser)) res.push(item.browser);
        });
      } else if (this.curBrand !== "全部") {
        Object.values(this.uaMap[this.curBrand]).forEach((item) => {
          item.forEach((sub) => {
            if (!res.includes(sub.browser)) res.push(sub.browser);
          });
        });
      } else if (this.curDevice !== "全部") {
        this.updateBrand();
      }
      return res;
    },
  },
  methods: {
    updateBrand() {
      Object.keys(this.uaMap).forEach((k) => {
        const d = this.uaMap[k];
        if (d[this.curDevice]) {
          this.curBrand = k;
        }
      });
    },
    updateData() {
      if (this.curBrand === "全部" && this.curDevice === "全部") {
        Object.values(this.uaMap).forEach((d) => {
          Object.values(d).forEach((r) => {
            this.list = [...this.list, ...r];
          });
        });
      } else if (this.curBrand !== "全部") {
        let temp = [];
        Object.values(this.uaMap[this.curBrand]).forEach((r) => {
          temp = [...temp, ...r];
        });
        if (this.curBrowser) {
          temp = temp.filter((i) => i.browser === this.curBrowser);
        }
        this.list = temp;
      } else {
        if (this.curBrowser) {
          this.list = this.uaMap[this.curBrand][this.curDevice].filter(
            (item) => {
              item.browser === this.curBrowser;
            }
          );
        } else {
          this.list = this.uaMap[this.curBrand][this.curDevice];
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  background: #ffffff;
  box-shadow: 0px 2px 4px -2px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  font-size: 14px;
  text-align: left;
  padding: 16px 24px 8px;
  &:hover {
    box-shadow: 0px 6px 4px -4px rgba(0, 0, 0, 0.08);
    .cate-item:last-of-type {
      display: flex;
    }
  }
  .cate-item {
    display: flex;
    align-items: flex-start;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 22px;
    &.margin-btm {
      margin-bottom: 8px;
    }
    &:last-of-type {
      display: none;
    }
    .cate-name {
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
      margin-right: 16px;
      flex-shrink: 0;
    }

    .item-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -2px;
      .tag {
        margin: 0 2px 8px;
        padding: 0 8px;
        cursor: pointer;
        &.current {
          background: rgba(23, 100, 232, 0.06);
          border-radius: 11px;
          color: #1764e8;
        }

        &:hover {
          color: #1764e8;
        }
      }
    }
  }
}
</style>
