//import './assets/main.css'

import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from "./App.vue";
import router from "./router.js";
import { createPinia } from 'pinia'

const pinia = createPinia();


createApp(App).use(router).use(pinia).mount("#app");