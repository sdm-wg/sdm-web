const fs = require("fs");
const path = require("path");
const moment = require("moment");
const handlebars = require("handlebars");

const DEFAULT_ARCHETYPE = "default";

const DEFAULT_TEMPLATE = `\
---
title: "{{ unslug name }}",
slug: "{{ name }}",
date: "{{ format date 'YYYY-MM-DDTHH:mm:ss' }}",
draft: true,
---
`;

const view = {
  name: null,
  date: null,
  unslug: (slug) =>
    slug
      .replace(/_/g, "-")
      .replace(/--/g, "-")
      .split("-")
      .map((partial) => partial.charAt(0).toUpperCase() + partial.slice(1))
      .join(" "),
  format: (date, formatString) => {
    if (typeof formatString === "string" || formatString instanceof String) {
      return date.format(formatString);
    } else {
      return date.format();
    }
  },
};

const genArchetypeTemplatePath = (archetype) =>
  path.join("./archetypes", `${archetype}.md`);

const archetypeOf = (postPath) => {
  let archetype = DEFAULT_ARCHETYPE;

  // Search archetype
  const gridsomeConfig = require("../../gridsome.config");
  for (const plugin of gridsomeConfig.plugins) {
    if (plugin.use !== "@gridsome/vue-remark") {
      continue;
    }

    const relPath = path.relative(postPath, plugin.options.baseDir);
    if (relPath.replace(/\.\./g, "").replace(/\//g, "") === "") {
      archetype = plugin.options.typeName.toLowerCase();
      break;
    }
  }

  // Check existence of archetype template
  if (!fs.existsSync(genArchetypeTemplatePath(archetype))) {
    archetype = DEFAULT_ARCHETYPE;
  }

  return archetype;
};

const loadArchetypeTemplate = (archetype) => {
  const archetypeTemplatePath = genArchetypeTemplatePath(archetype);
  const parsedPath = path.parse(archetypeTemplatePath);

  if (!fs.existsSync(parsedPath.dir)) {
    fs.mkdirSync(parsedPath.dir, { recursive: true });
  }
  if (!fs.existsSync(archetypeTemplatePath)) {
    // If `./archetypes/default.md` does not exist
    // Create default archetype template
    console.warn(`${archetypeTemplatePath} does not exist`);

    fs.writeFileSync(archetypeTemplatePath, DEFAULT_TEMPLATE, "utf-8");
    console.log(`${archetypeTemplatePath} created`);
  }

  const archetypeTemplate = fs.readFileSync(archetypeTemplatePath, "utf-8");
  return archetypeTemplate;
};

const generatePost = (postPath) => {
  const parsedPath = path.parse(postPath);
  if (fs.existsSync(postPath)) {
    console.error(`${postPath} has already existed`);
    process.exit(1);
  }
  if (!fs.existsSync(parsedPath.dir)) {
    fs.mkdirSync(parsedPath.dir, { recursive: true });
  }

  view.name = parsedPath.name;
  view.date = moment();

  const postType = archetypeOf(postPath);
  const archetypeTemplate = loadArchetypeTemplate(postType);

  const template = handlebars.compile(archetypeTemplate);

  fs.writeFileSync(postPath, template(view), "utf-8");
  console.log(`${postPath} created`);
};

module.exports = {
  genArchetypeTemplatePath,
  archetypeOf,
  loadArchetypeTemplate,
  generatePost,
};
