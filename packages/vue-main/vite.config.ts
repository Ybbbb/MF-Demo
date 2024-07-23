import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.endsWith("widget"),
        },
      },
    }),
    federation({
      remotes: {
        ngMfe: "http://localhost:4201/remoteEntry.js",
      },
    }),
  ],
});
