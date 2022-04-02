import { createApp } from "vue";
import App from "./App.vue";
import { key, store } from "./store";
import "@fontsource/press-start-2p";
import "nes.css/css/nes.min.css";
import "@l1ck0h/every-layout.css/every-layout.min.css";

createApp(App).use(store, key).mount("#app");
