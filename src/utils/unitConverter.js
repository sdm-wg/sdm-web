export const rem2px = (rem) => {
  if (process.browser) {
    const fontSize = getComputedStyle(document.documentElement).fontSize;
    return rem * parseFloat(fontSize);
  }
  return rem;
};
