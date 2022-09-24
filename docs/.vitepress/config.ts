import { defineConfig } from "vitepress";

// @note: math plugin
import mathjax3 from "markdown-it-mathjax3";
const customElements = ["mjx-container"];

export default defineConfig({
  base: "/",
  lang: "zh",
  title: "ZhangKai Blog",
  description: "个人笔记",
  lastUpdated: true,

  outDir: "../dist/",

  themeConfig: {
    siteTitle: "慎独",
    socialLinks: [
      { icon: "github", link: "https://github.com/zh-kai" },
      {
        icon: "twitter",
        link: "https://twitter.com/FreeLoop0531",
      },
    ],
    nav: [
      { text: "Blog", link: "/blog/" },
      { text: "Resources", link: "/resource/" },
      { text: "Code", link: "/code/" },
    ],
    sidebar: {
      "/blog/": [
        {
          text: "Blogs",
          items: [
            { text: "介绍", link: "/blog/" },
            { text: "Ethereum", link: "/blog/ethereum" },
            { text: "Nothing", link: "/blog/nothing" },
          ],
        },
        {
          text: "Best Practices",
          items: [
            { text: "Nuxt3", link: "/blog/nuxt3" },
            { text: "CSS", link: "/blog/css" },
            { text: "Three.js", link: "/blog/threejs" },
            { text: "Generator", link: "/blog/generate-art" },
          ],
        },
      ],
      "/resource/": [
        {
          text: "资源",
          items: [
            { text: "Chowder", link: "/resource/chowder" },
            { text: "Illustration", link: "/resource/illustration" },
            { text: "Icon", link: "/resource/icon" },
            { text: "Template", link: "/resource/template" },
            { text: "Tools", link: "/resource/tools" },
            { text: "Colors", link: "/resource/colors" },
          ],
        },
        {
          text: "动森",
          items: [
            { text: "鱼类", link: "/resource/animal-crossing/fish" },
            { text: "昆虫", link: "/resource/animal-crossing/insect" },
            { text: "海洋生物", link: "/resource/animal-crossing/halobios" },
          ],
        },
      ],
      "/code/": [
        {
          text: "Demos",
          items: [{ text: "Button", link: "/code/button" }],
        },
        {
          text: "Snippets",
          items: [{ text: "Math", link: "/code/math" }],
        },
      ],
    },
  },

  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  // vue: {
  //   template: {
  //     compilerOptions: {
  //       isCustomElement: (tag) => customElements.includes(tag),
  //     },
  //   },
  // },
});
