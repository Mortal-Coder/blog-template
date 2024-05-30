// 引入初始化样式
import "@/styles/common.scss";
import vuetyped from "vue3typed";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetyped);

app.mount("#app");
