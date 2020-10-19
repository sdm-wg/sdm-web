/*
 *  Simplified Argument Parser
 */
const usage = `\
Usage: ${process.argv[0]} ${process.argv[1]} <path>

Create a new post

Positionals:
  path        the path to create a new post

Options:
  -h, --help  output usage information
`;

const help = () => {
  console.log(usage);
};

if (process.argv.length < 3) {
  help();
  console.error("Error: path needs to be provided");
  process.exit(1);
} else if (process.argv.length > 3) {
  help();
  console.error(`Unknown argument: ${process.argv.slice(3).join(" ")}`);
  process.exit(1);
} else if (process.argv[2] === "-h" || process.argv[2] === "--help") {
  help();
  process.exit(0);
} else if (!process.argv[2].endsWith(".md")) {
  help();
  console.error(
    `Error: \`${process.argv[2]}\` is not a Markdown file (\`.md\`)`
  );
  process.exit(1);
}

/*
 *  Post Generator
 */
const postPath = process.argv[2];

const generatePost = require("./utils").generatePost;
generatePost(postPath);
