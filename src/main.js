import Vue from "vue";
import elementUI from "element-ui";
import App from "./App.vue";
import store from "../store";

import "element-ui/lib/theme-chalk/index.css";
import DataMap from "../scripts/DataReader";

const db = new DataMap();
store.dispatch("setUA", db.dataMap);

Vue.config.productionTip = false;

Vue.use(elementUI);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
