const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const moment = require("moment");

const DEFAULT_ARCHETYPE = "default";

let slug = "";
let date = moment();

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

    const frontmatters = {
      title: "{{ name | unslug }}",
      slug: "{{ name }}",
      date: "{{ date | format 'YYYY-MM-DDTHH:mm:ss' }}",
      draft: true,
    };
    fs.writeFileSync(
      archetypeTemplatePath,
      matter.stringify("", frontmatters).replace(/'/g, '"').replace(/""/g, "'"),
      "utf-8"
    );
    console.log(`${archetypeTemplatePath} created`);
  }

  const archetypeTemplate = fs.readFileSync(archetypeTemplatePath, "utf-8");
  return archetypeTemplate;
};

const unslug = (slug) =>
  slug
    .replace(/_/g, "-")
    .replace(/--/g, "-")
    .split("-")
    .map((partial) => partial.charAt(0).toUpperCase() + partial.slice(1))
    .join(" ");

const assginMatterValue = (variable, functions) => {
  if (variable === "name") {
    return `'${functions[0] === "unslug" ? unslug(slug) : slug}'`;
  } else if (variable === "date") {
    if (functions[0] === "format") {
      return date.format(functions[1]);
    }
    return date.format();
  }
  return "unknown";
};

const recursiveMatterConverter = (val) => {
  if (typeof val === "string" || val instanceof String) {
    // Detect mustache
    const mustacheRegExp = /\{\{\s*(.*\S)\s*\}\}/g;
    const mustacheMatch = mustacheRegExp.exec(val);
    if (!mustacheMatch) {
      return `'${val}'`;
    }
    const mustacheString = mustacheMatch[1];

    // Detect operations
    const opsRegExp = /('[^']*'|"[^"]*"|`[^`]*`|\S+)/g;
    let opsMatch;
    const ops = [];
    while ((opsMatch = opsRegExp.exec(mustacheString))) {
      ops.push(opsMatch[1]);
    }

    // Parse variable/functions
    const variable = ops[0];
    const functions = ops[1] === "|" ? ops.slice(2) : [];
    return assginMatterValue(variable, functions);
  } else if (val instanceof Array || val instanceof Object) {
    for (const k in val) {
      val[k] = recursiveMatterConverter(val[k]);
    }
    return val;
  }

  return val;
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

  slug = parsedPath.name;
  date = moment();

  const postType = archetypeOf(postPath);
  const archetypeTemplate = loadArchetypeTemplate(postType);

  const templateData = matter(archetypeTemplate);
  const frontmatters = recursiveMatterConverter(templateData.data);

  fs.writeFileSync(
    postPath,
    matter
      .stringify(templateData.content, frontmatters)
      .replace(/'''/g, "'")
      .replace(/'/g, '"'),
    "utf-8"
  );
  console.log(`${postPath} created`);
};

module.exports = {
  genArchetypeTemplatePath,
  archetypeOf,
  loadArchetypeTemplate,
  unslug,
  assginMatterValue,
  recursiveMatterConverter,
  generatePost,
};
