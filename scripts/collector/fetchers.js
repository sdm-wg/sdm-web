const fs = require("fs");
const jsYaml = require("js-yaml");

const { recursiveReaddir } = require("./utils/fs");

const fetchYaml = (basePath) => {
  const mergedYamlText = recursiveReaddir(basePath)
    .filter(
      (filePath) => filePath.endsWith(".yaml") || filePath.endsWith(".yml")
    )
    .map((filePath) => fs.readFileSync(filePath, "utf-8"))
    .join("\n");

  const data = jsYaml.safeLoad(mergedYamlText);
  return data;
};

module.exports = { fetchYaml };
