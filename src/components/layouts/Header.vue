<template>
  <div :class="['wrapper', direction]">
    <div class="hd-lt" @click="goToHome">
      <img :src="Logo" />
      <div class="logo-text">
        <div class="title">WhichUA</div>
        <div class="desc">手机UA大全</div>
      </div>
    </div>
    <div class="hd-rt">
      <SearchBar
        v-if="$route.name === 'Search'"
        class="hd-inline"
        :width="300"
      />
      <el-menu @select="handleSelect" class="menus" mode="horizontal">
        <el-menu-item index="1">品牌</el-menu-item>
        <el-menu-item index="2">关于</el-menu-item>
      </el-menu>
      <j-icon
        class="icon"
        type="github"
        :size="24"
        @click="goToGithub"
      ></j-icon>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.png";
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      Logo,
      direction: "",
    };
  },
  mounted() {
    let lastTop = 0;
    window.onscroll = () => {
      const curTop = document.scrollingElement.scrollTop;
      if (curTop >= lastTop) {
        this.direction = "down";
      } else {
        this.direction = "up";
      }
      lastTop = curTop;
    };
  },
  methods: {
    goToHome() {
      this.$router.push({
        name: "Home",
      });
    },
    handleSelect(key) {
      if (key === "1") {
        this.$router.push({
          name: "BrandsList",
        });
      }

      if (key === "2") {
        this.$router.push({
          name: "AboutMe",
        });
      }
    },
    goToGithub() {
      window.open("https://github.com/Jerenyaoyelu/whichua", "_blank");
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 60px;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 1999;
  &.up {
    top: 0px;
    transition: top 0.4s ease-in;
    -webkit-transition: top 0.4s ease-in;
  }
  &.down {
    top: -60px;
    transition: top 0.1s ease-out;
    -webkit-transition: top 0.1s ease-out;
  }
  .hd-lt {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 32px;
      height: 32px;
    }

    .logo-text {
      margin-left: 12px;
      font-family: Arial, Helvetica, sans-serif;
      text-align: left;
      .title {
        font-weight: 700;
        font-size: 15px;
      }
      .desc {
        font-size: 13px;
        font-weight: 500;
        margin-top: 4px;
      }
    }
  }

  .hd-rt {
    display: flex;
    align-items: center;
    margin-right: 40px;
    .menus {
      margin-right: 20px;
      font-size: 16px;
    }
    .icon {
      cursor: pointer;
    }
  }

  .hd-inline {
    position: relative;
    top: -25px;
    margin-right: 30px;
  }
}
</style>
