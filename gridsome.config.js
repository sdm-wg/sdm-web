// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
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
