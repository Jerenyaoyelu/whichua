<template>
  <div class="page">
    <div class="page-top" :style="`background-image:url(${HomeDefaultBg})`">
      <SearchBar />
    </div>
    <div class="page-btm">
      <div class="section">
        <div class="desc">
          <div class="title">What We Cover</div>
          <p class="left">
            本站涵盖了目前国内流行的所有手机品牌和部分型号，截至目前共收录了<span
              >{{ totalBrands }}</span
            >款手机品牌，<span>{{ totalDevices }}</span
            >种手机型号，和<span>{{ totalBrowers }}</span
            >条不同浏览器UA信息，共各位看官查看，且还在不断更新中...
          </p>
        </div>
        <div class="right">
          <BrandsPie :data="brandsList" />
        </div>
      </div>
      <div class="section">
        <div class="right"></div>
        <div class="desc">
          <div class="title">What We Build</div>
          <p class="left">
            基于本站的数据优势，量身打造了更加精准的responsiveJS依赖包，探测设备是否是移动端还是PC端，检验屏幕是否横屏抑或竖屏
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeDefaultBg from "@/assets/images/home-banner-bg.gif";
import SearchBar from "@/components/SearchBar.vue";
import BrandsPie from "@/components/charts/BrandsPie.vue";
import dataMixin from "@/components/mixins";

export default {
  mixins: [dataMixin],
  data() {
    return {
      HomeDefaultBg,
      brandsList: [],
      totalBrands: 0,
      totalDevices: 0,
      totalBrowers: 0,
    };
  },
  components: {
    SearchBar,
    BrandsPie,
  },
  created() {
    const allBrands = Object.keys(this.uaMap);
    this.totalBrands = allBrands.length;
    allBrands.forEach((k) => {
      const item = this.uaMap[k];
      this.totalDevices += Object.keys(item).length;
      Object.keys(item).forEach((subK) => {
        this.totalBrowers += item[subK].length;
        this.brandsList.push({
          type: k,
          name: subK,
          value: item[subK].length,
          nameValue: Object.keys(item).length,
        });
      });
    });
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
    .section {
      margin-top: 10px;
      margin-bottom: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .desc {
        text-align: left;
      }
      .title {
        margin-bottom: 30px;
        font-size: 48px;
        font-family: PingFangSC-Medium, PingFang SC;
      }
      .left {
        font-family: PingFangSC-Regular, PingFang SC;
        font-size: 24px;
        width: 600px;
        line-height: 48px;
        span {
          color: #308ce8;
          font-size: 36px;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
