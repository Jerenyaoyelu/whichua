<template>
  <div class="wrapper">
    <div class="hd-lt">
      <img :src="Logo" />
      <div class="logo-text">
        <div class="title">WhichUA</div>
        <div class="desc">Detect every phone</div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/assets/images/logo.png";

export default {
  data() {
    return {
      Logo,
    };
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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  .hd-lt {
    display: flex;
    align-items: center;
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
}
</style>
