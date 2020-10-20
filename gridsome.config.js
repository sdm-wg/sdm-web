module.exports = {
  siteName: "Software Defined Media Consortium",
  siteDescription: "",
  siteUrl: "https://sdm.wide.ad.jp/",
  pathPrefix: "",
  titleTemplate: "%s | Software Defined Media Consortium",
  icon: {
    favicon: "./src/assets/images/sdm-logo-square.png",
    touchicon: "./src/assets/images/sdm-logo-square.png",
  },
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "./content/posts",
        route: "/posts/:year/:month/:day/:slug",
        template: "./src/templates/Post.vue",
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tags/:id",
            create: true,
          },
          archives: {
            typeName: "Archive",
            route: "/archives/:id",
            create: true,
          },
        },
        plugins: [["@gridsome/remark-prismjs"]],
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: ["en-us", "ja-jp"],
        pathAliases: {
          "en-us": "en",
          "ja-jp": "ja",
        },
        fallbackLocale: "en-us",
        defaultLocale: "en-us",
        enablePathRewrite: true,
        rewriteDefaultLanguage: true,
        messages: {},
      },
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require("tailwindcss")],
      },
    },
  },
};
