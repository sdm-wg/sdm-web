const fs = require("fs");
const jsYaml = require("js-yaml");

const recursiveReaddir = (dir, files = []) => {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    if (dirent.isFile()) {
      files.push(`${dir}/${dirent.name}`);
    } else if (dirent.isDirectory()) {
      const nextDir = `${dir}/${dirent.name}`;
      files = recursiveReaddir(nextDir, files);
    }
  }
  return files;
};

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

module.exports = {
  recursiveReaddir,
  fetchYaml,
};
