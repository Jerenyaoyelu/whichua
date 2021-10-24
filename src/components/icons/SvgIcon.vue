<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    :style="`width:${size / 100}rem;height:${size / 100}rem`"
    @click="handleClick"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.type}`;
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="less" scoped>
.svg-icon {
  width: 20px;
  height: 20px;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
</style>
