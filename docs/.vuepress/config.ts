import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  
  base: "/",

  dest: "./dist",

  port: 3000,

  locales: {
    "/": {
      lang: "zh-CN",
      title: "饮食男女",
      description: "饮食男女，人之大欲存焉",
    },
  },

  theme,

  // 预拉取页面所需的所有文件
  shouldPrefetch: false,

  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],
});
