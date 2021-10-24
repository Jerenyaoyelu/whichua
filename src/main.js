import Vue from "vue";
import elementUI from "element-ui";
import App from "./App.vue";
import store from "../store";
import router from "../routers";
import "@/components/icons";

import "element-ui/lib/theme-chalk/index.css";
import "@/styles/basic.less";
import DataMap from "../scripts/DataReader";

const db = new DataMap();
store.dispatch("setUA", db.dataMap);

Vue.config.productionTip = false;

Vue.use(elementUI);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
