import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: 'WAV',
      icon: 'english',
      prefix: '800-wav/',
      collapsable: true,
      children: 'structure',
    },
    {
      text: 'JAV',
      icon: 'japan',
      prefix: '900-jav/',
      collapsable: true,
      children: 'structure',
    },
  ]
});