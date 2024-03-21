import { defineConfig } from "vitepress";
import siderbar from "./siderbar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "代码二三事 ",
  description: "学然后知不足 非淡泊无以明志，非宁静无以致远",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "博客,前端,代码,个人博客,学习,兴趣,BINGOBLOG,JavaScript,React",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "博客",
        link: "/note/",
      },
      {
        text: "算法",
        link: "/algorithm/",
      },
    ],

    sidebar: siderbar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: "github", link: "https://github.com/bingoYB" }],

    /* Algolia DocSearch 配置 */
    // algolia,

    footer: {
      message: "如有转载或 CV 的请标注本站原文地址",
      copyright: "Copyright © 2021-present Bingo",
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    search: {
      provider: 'local'
    }
  },

  lastUpdated: true
});
