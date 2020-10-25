const fs = require("fs");
const path = require("path");
const jsYaml = require("js-yaml");
const Cite = require("citation-js");

const { recursiveReaddir } = require("./utils/fs");
const { mergeBibFiles, generatePublications } = require("./utils/cite");

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

const fetchBibtex = (basePath) => {
  const mergedBibtex = {
    ja: mergeBibFiles(path.join(basePath, "ja")),
    en: mergeBibFiles(path.join(basePath, "en")),
  };

  let data = [];
  for (const pubLang in mergedBibtex) {
    const bibTex = mergedBibtex[pubLang];
    const bibData = Cite.parse.bibtex.text(bibTex);

    const pubs = bibData.map((entry) => generatePublications(entry, pubLang));
    data = [...data, ...pubs];
  }

  return data;
};

module.exports = { fetchYaml, fetchBibtex };
