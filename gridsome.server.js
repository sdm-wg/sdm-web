const { fetchYaml } = require("./scripts/collector");

module.exports = function (api) {
  // Remove draft posts when a production stage
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

  // Collect notices
  api.loadSource(({ addCollection }) => {
    const noticeCollection = addCollection({
      typeName: "Notice",
    });

    const basePath = "./content/notices";
    const notices = fetchYaml(basePath);
    for (const index in notices) {
      const notice = notices[index];
      noticeCollection.addNode({
        id: index,
        date: notice.date,
        content: notice.content,
      });
    }
  });
};
