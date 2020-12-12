const { fetchYaml, fetchBibtex } = require("./scripts/collector");

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
      const item = notices[index];
      noticeCollection.addNode({
        id: index,
        ...item,
      });
    }
  });

  // Collect media info
  api.loadSource(({ addCollection }) => {
    const mediaCollection = addCollection({
      typeName: "Media",
    });

    const basePath = "./content/media";
    const media = fetchYaml(basePath);
    for (const index in media) {
      const item = media[index];
      mediaCollection.addNode({
        id: index,
        ...item,
      });
    }
  });

  // Collect members
  api.loadSource(({ addCollection }) => {
    const memberCollection = addCollection({
      typeName: "Member",
    });

    const basePath = "./content/members";
    const members = fetchYaml(basePath);
    for (const index in members) {
      const item = members[index];
      memberCollection.addNode({
        id: index,
        ...item,
      });
    }
  });

  // Collect publications
  api.loadSource(({ addCollection }) => {
    const publicationCollection = addCollection({
      typeName: "Publication",
    });

    const basePath = "./content/publications";
    const publications = fetchBibtex(basePath);
    for (const item of publications) {
      publicationCollection.addNode({
        ...item,
      });
    }
  });

  // Collect projects
  api.loadSource(({ addCollection }) => {
    const projectCollection = addCollection({
      typeName: "Project",
    });

    const basePath = "./content/projects";
    const projects = fetchYaml(basePath);
    for (const index in projects) {
      const item = projects[index];
      projectCollection.addNode({
        id: index,
        ...item,
      });
    }
  });
};
