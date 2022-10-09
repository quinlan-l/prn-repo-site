import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({

  /* 基本选项 */

  // 部署到哪里
  hostname: "https://prn.1369.ml",

  repo: "quinlan-l/prn-repo-site",
  repoDisplay: false,

  author: {
    name: 'quinlan-l',
    url: 'https://github.com/quinlan-l',
  },

  docsDir: "docs",

  /* 外观选项 */

  // 纯净模式
  pure: true,

  darkmode: "toggle",

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  fullscreen: true,

  iconAssets: "iconfont",

  backToTop: true,

  logo: "/logo.svg",

  // 导航、标题、文章属性
  breadcrumb: true,
  breadcrumbIcon: true,
  titleIcon: true,
  pageInfo: ["Category", "Tag"],

  // 源文件
  editLink: true,
  docsBranch: "mst",

  /* 多语言选项 */

  locales: {
    // 默认是中文
    "/": {

      //布局选项
      navbar: zhNavbar,
      sidebar: zhSidebar,
  
      // 源文件
      metaLocales: {
        editLink: "编辑此页",
      },

      // 页脚
      displayFooter: true,
      footer: "Copyright © 2022 quinlan-l",
      copyright: false,
      
      // 博客选项
      blog: {
        name: "Hi~",
        timeline: "众里寻他千百度",
        articleInfo: ["Category", "Tag"]
      },
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    mdEnhance:{
      imageSize: true,
    },
    photoSwipe: {
      delay: 500
    },
  },
});
