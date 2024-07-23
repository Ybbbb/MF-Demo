import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "../decl.d.ts";

await import("ngMfe/WebWidgets")
  .then((res) => {
    console.log("res", res);
  })
  .catch((error) => {
    console.error("error", error);
  });

createApp(App).mount("#app");
