<template>
  <div class="card-container">
    <div class="text-item">
      <label
        ><j-icon class="icon" type="device" :size="16"></j-icon>
        <j-icon class="icon-active" type="device-active" :size="16"></j-icon
        >机型：</label
      >
      {{ data.device }}
    </div>
    <div class="text-item">
      <label
        ><j-icon class="icon" type="browser" :size="16"></j-icon>
        <j-icon class="icon-active" type="browser-active" :size="16"></j-icon
        >浏览器：</label
      >
      {{ data.browser }}
    </div>
    <div class="text-item">
      <label>
        <j-icon class="icon" :type="systemIcon" :size="16"></j-icon>
        <j-icon
          class="icon-active"
          :type="systemIconActive"
          :size="16"
        ></j-icon>
        操作系统：</label
      >
      {{ data.system }}
    </div>
    <div class="text-item">
      <label
        ><j-icon class="icon" type="user-agent" :size="16"></j-icon>
        <j-icon class="icon-active" type="user-agent-active" :size="16"></j-icon
        >UA：</label
      >
      {{ data.ua }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    systemIcon() {
      const lower = this.data.system.toLowerCase();
      if (lower === "android") return "android";
      if (["iphone", "ipad"].includes(lower)) return "ios";
      return "system";
    },
    systemIconActive() {
      const lower = this.data.system.toLowerCase();
      if (lower === "android") return "android-active";
      if (["iphone", "ipad"].includes(lower)) return "ios-active";
      return "system";
    },
  },
};
</script>

<style lang="less" scoped>
.card-container {
  width: 350px;
  height: 190px;
  margin: 0 10px 20px;
  border-radius: 10px;
  border: 1px solid #d4d4d5;
  .box-shadow();
  &:hover {
    .box-shadow__hover();
  }

  padding: 20px 25px;
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
    &:not(:last-of-type) {
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

  .icon-active,
  .icon {
    margin-right: 5px;
  }

  .icon-active {
    display: none;
  }

  &:hover {
    .icon-active {
      display: inline;
    }
    .icon {
      display: none;
    }
  }
}
</style>
