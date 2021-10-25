<template>
  <div class="card-container" :style="`background-image:url(${Bg})`">
    <div class="info">
      <div class="text-item">
        <label><j-icon type="system" :size="16"></j-icon>操作系统：</label>
        {{ data.system }}
      </div>
      <div class="text-item">
        <label><j-icon type="user-agent" :size="16"></j-icon>UA：</label>
        {{ data.ua }}
      </div>
    </div>
  </div>
</template>

<script>
import Bg from "@/assets/images/uacard-default-bg.jpg";

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      Bg,
    };
  },
};
</script>

<style lang="less" scoped>
.card-container {
  background-repeat: no-repeat;
  background-size: cover;
  width: 500px;
  height: 320px;
  margin: 0 20px 30px;
  border-radius: 20px;
  position: relative;
  .box-shadow();
  &:hover {
    .box-shadow__hover();
  }
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    border-radius: 20px;
    filter: blur(2px);
  }

  .info {
    width: 270px;
    height: 200px;
    position: absolute;
    top: 65px;
    left: 133px;
    padding: 10px 5px;
  }

  .text-item {
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    z-index: 3;
    color: #333;
    font-family: PingFangSC-Regular, PingFang SC;
    display: flex;
    align-items: flex-start;
    &:first-of-type {
      margin-bottom: 10px;
    }
    label {
      font-weight: 600;
      font-family: PingFangSC-Medium, PingFang SC;
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }
  }
}
</style>
