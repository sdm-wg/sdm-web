module.exports = function (api) {
  api.loadSource((store) => {
    if (process.env.NODE_ENV === "production" || process.env.NODE_PREVIEW) {
      const posts = store.getContentType("Post");
      posts.data().forEach((node) => {
        if (node.draft) {
          posts.removeNode(node.id);
        }
      });
    }
  });

  // api.loadSource(({ addCollection }) => {
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // });

  // api.createPages(({ createPage }) => {
  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // });
};
