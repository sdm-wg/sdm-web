const fs = require("fs");

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

module.exports = { recursiveReaddir };
