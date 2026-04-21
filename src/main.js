//import './assets/main.css'

import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from "./App.vue";
import router from "./router.js";

createApp(App).use(router).mount("#app");
