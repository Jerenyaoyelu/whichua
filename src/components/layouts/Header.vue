<template>
  <div class="wrapper">
    <div class="hd-lt" @click="goToHome">
      <img :src="Logo" />
      <div class="logo-text">
        <div class="title">WhichUA</div>
        <div class="desc">Detect every phone</div>
      </div>
    </div>
    <div class="hd-rt">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="menus"
        mode="horizontal"
      >
        <el-menu-item index="1">关于作者</el-menu-item>
      </el-menu>
      <!-- <j-icon
        class="icon"
        type="github"
        :size="24"
        @click="goToGithub"
      ></j-icon> -->
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.png";

export default {
  data() {
    return {
      Logo,
      activeIndex: "1",
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
          name: "AboutMe",
        });
      }
    },
    // goToGithub() {
    //   window.open("https://github.com/Jerenyaoyelu/whichua", "_blank");
    // },
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
}
</style>
