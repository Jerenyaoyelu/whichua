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
        <div class="right mob">
          <div class="show-mob">
            <img :src="mobImg" />
            <div class="example">
              <div>
                <label>当前是否移动端：</label
                ><span>{{ deviceDetail.isPc ? "否" : "是" }}</span>
              </div>
              <div>
                <label>屏幕方向：</label
                ><span>{{ orientText(deviceDetail.orient) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="desc">
          <div class="title">What We Build</div>
          <p class="left">
            基于本站的数据优势，量身打造了超轻量<a
              href="https://github.com/Jerenyaoyelu/mob-spy"
              >mob-spy依赖包</a
            >，更加紧准的探测设备是否是移动端还是PC端，检验屏幕是否横屏抑或竖屏，且支持响应窗口大小变化
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
import Mob from "mob-spy";
import mobImg from "@/assets/images/mob-example.png";

const mob = new Mob();
const oMap = {
  portrait: "竖屏",
  landscape: "横屏",
};

export default {
  mixins: [dataMixin],
  data() {
    return {
      HomeDefaultBg,
      brandsList: [],
      totalBrands: 0,
      totalDevices: 0,
      totalBrowers: 0,
      mobImg,
      deviceDetail: {
        isPc: null,
        orient: "",
      },
    };
  },
  components: {
    SearchBar,
    BrandsPie,
  },
  computed: {
    orientText() {
      return (t) => {
        return oMap[t];
      };
    },
  },
  created() {
    this.setDeviceDetail();
    window.onresize = () => {
      mob.onWindowResize();
      this.setDeviceDetail();
    };
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
  methods: {
    setDeviceDetail() {
      this.deviceDetail.isPc = mob.getIsPc;
      this.deviceDetail.orient = mob.getOrientation;
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

      .right.mob {
        width: 600px;
      }

      .show-mob {
        width: 80%;
        border-radius: 10px;
        background: #fff;
        padding: 10px 5px;
        .box-shadow__float();
        img {
          width: 100%;
          height: 260px;
          object-fit: contain;
          object-position: top left;
        }
        .example {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 10px 0;
          border-top: 1px solid #bcbcbc;
          text-align: left;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          label {
            font-family: PingFangSC-Medium, PingFang SC;
          }
        }
      }
    }
  }
}
</style>
