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
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require("tailwindcss")],
      },
    },
  },
};
