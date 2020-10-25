export const unslug = (slug) =>
  slug
    .replace(/_/g, "-")
    .replace(/--/g, "-")
    .split("-")
    .map((partial) => partial.charAt(0).toUpperCase() + partial.slice(1))
    .join(" ");
