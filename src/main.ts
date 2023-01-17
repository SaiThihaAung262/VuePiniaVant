import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import { setupPlugins } from "./plugins";
import { pinia } from "./store";

const app = createApp(App);

setupRouter(app);
setupPlugins(app);
app.use(pinia);

// var Tawk_API = Tawk_API || {},
//   Tawk_LoadStart = new Date();
// (function () {
//   var s1 = document.createElement("script"),
//     s0 = document.getElementsByTagName("script")[0];
//   s1.async = true;
//   s1.src = "https://embed.tawk.to/635a215cdaff0e1306d43602/1ggc14kt2";
//   s1.charset = "UTF-8";
//   s1.setAttribute("crossorigin", "*");
//   s0.parentNode.insertBefore(s1, s0);
// })();

app.mount("#app");
