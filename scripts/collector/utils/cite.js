const fs = require("fs");
const path = require("path");
const Cite = require("citation-js");

const { recursiveReaddir } = require("./fs");

/*
 *  Citation.js setting
 */
const cslPath = "./scripts/collector/csl";
const ieeeTemplate = fs.readFileSync(path.join(cslPath, "ieee.csl"), "utf-8");

const cslConfig = Cite.plugins.config.get("@csl");
cslConfig.templates.add("ieee", ieeeTemplate);

/*
 *  Const values
 */
const CUSTOM_FIELDS = ["github", "youtube"];

const anotherLangs = {
  ja: "en",
  en: "ja",
};

/*
 *  Detect Japanese
 *  (referred to https://pisuke-code.com/js-check-hira-kana-kanzi/)
 */
const isHiragana = (str) =>
  /[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{309B}-\u{309E}]/mu.test(str);

const isKatakana = (str) =>
  /[\u{3000}-\u{301C}\u{30A1}-\u{30F6}\u{30FB}-\u{30FE}]/mu.test(str);

const isKanji = (str) =>
  /([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu.test(
    str
  );

const isJapanese = (str) => isHiragana(str) || isKatakana(str) || isKanji(str);

/*
 *  Cite utils
 */
const mergeBibFiles = (basePath) =>
  recursiveReaddir(basePath)
    .filter((filePath) => filePath.endsWith(".bib"))
    .map((filePath) => fs.readFileSync(filePath, "utf-8"))
    .join("\n");

const generateFields = (fields) =>
  fields.reduce((acc, cur) => {
    acc[cur] = "";
    return acc;
  }, {});

const extractFields = (props, fields, isExclusive = false) => {
  const extractedProps = isExclusive ? {} : generateFields(fields);

  for (const field in props) {
    if (fields.includes(field) ^ isExclusive) {
      extractedProps[field] = props[field] ? props[field] : "";
    }
  }
  return extractedProps;
};

const deleteFields = (props, fields) => {
  for (const field in fields) {
    delete props[field];
  }
};

const overrideI18nFields = (i18nProps, pubLang) => {
  const anotherPubLang = anotherLangs[pubLang];
  for (const i18nLang in i18nProps) {
    for (const key in i18nProps[i18nLang]) {
      if (!key.endsWith(`_${anotherPubLang}`)) {
        continue;
      }

      if (i18nLang === anotherPubLang) {
        const orgKey = key.slice(0, -3);
        i18nProps[i18nLang][orgKey] = i18nProps[i18nLang][key];
      }

      delete i18nProps[i18nLang][key];
    }
  }
};

const fixJapaneseNameOrder = (authors) => {
  for (const author of authors) {
    if (isJapanese(author.given) || isJapanese(author.family)) {
      const tmp = author.given;
      author.given = author.family;
      author.family = tmp;
    }
  }
};

const generatePublications = (entry, pubLang) => {
  const entryBase = { ...entry };
  delete entryBase.properties;

  const resourceProps = extractFields(entry.properties, [
    "url",
    "github",
    "youtube",
    "doi",
  ]);
  deleteFields(entry.properties, CUSTOM_FIELDS);

  const pub = {
    id: entry.label,
    type: entry.type,
    title: {},
    author: {},
    info: {},
    lang: pubLang,
    ...resourceProps,
  };

  const i18nProps = {
    ja: { ...entry.properties },
    en: { ...entry.properties },
  };

  overrideI18nFields(i18nProps, pubLang);

  for (const i18nLang in i18nProps) {
    const props = i18nProps[i18nLang];
    const partialProps = {
      title: extractFields(props, ["title"]),
      author: extractFields(props, ["author"]),
      info: extractFields(
        props,
        ["title", "author", "url", "github", "youtube", "doi"],
        true
      ),
    };

    for (const partialKey in partialProps) {
      const cite = new Cite({
        ...entryBase,
        properties: { ...partialProps[partialKey] },
      });

      if (partialKey === "author") {
        fixJapaneseNameOrder(cite.data[0].author);
      }

      pub[partialKey][i18nLang] = cite.format("bibliography", {
        template: "ieee",
      });
    }
  }

  return pub;
};

module.exports = { mergeBibFiles, generatePublications };
