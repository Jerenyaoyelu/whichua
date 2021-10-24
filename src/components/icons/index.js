import Vue from "vue";
import SvgIcon from "./SvgIcon.vue";

Vue.component("j-icon", SvgIcon);

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("@/assets/svg", false, /\.svg$/);
requireAll(req);
