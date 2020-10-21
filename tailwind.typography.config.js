const transitionCommonSettings = {
  transitionProperty:
    "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  transitionDuration: "500ms",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
};

module.exports = (theme) => ({
  default: {
    css: {
      ...transitionCommonSettings,
      a: {
        color: theme("colors.orange.600"),
        "&:hover": {
          color: theme("colors.orange.400"),
        },
      },
      strong: {
        ...transitionCommonSettings,
      },
      "ol > li::before": {
        ...transitionCommonSettings,
      },
      "ul > li::before": {
        ...transitionCommonSettings,
      },
      hr: {
        ...transitionCommonSettings,
      },
      blockquote: {
        ...transitionCommonSettings,
      },
      h1: {
        ...transitionCommonSettings,
      },
      h2: {
        ...transitionCommonSettings,
      },
      h3: {
        ...transitionCommonSettings,
      },
      h4: {
        ...transitionCommonSettings,
      },
      figcaption: {
        ...transitionCommonSettings,
      },
      code: {
        ...transitionCommonSettings,
      },
      thead: {
        ...transitionCommonSettings,
      },
      "tbody tr": {
        ...transitionCommonSettings,
        transitionProperty: "border-color", // Override
      },
    },
  },

  dark: {
    css: {
      color: theme("colors.gray.300"),
      transitionProperty:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      transitionDuration: "1000ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      a: {
        color: theme("colors.blue.600"),
        "&:hover": {
          color: theme("colors.blue.400"),
        },
      },
      strong: {
        color: theme("colors.gray.100"),
        ...transitionCommonSettings,
      },
      "ol > li::before": {
        color: theme("colors.gray.400"),
        ...transitionCommonSettings,
      },
      "ul > li::before": {
        backgroundColor: theme("colors.gray.600"),
        ...transitionCommonSettings,
      },
      hr: {
        borderColor: theme("colors.gray.700"),
        ...transitionCommonSettings,
      },
      blockquote: {
        color: theme("colors.gray.100"),
        ...transitionCommonSettings,
      },
      h1: {
        color: theme("colors.gray.100"),
        ...transitionCommonSettings,
      },
      h2: {
        color: theme("colors.gray.100"),
        ...transitionCommonSettings,
      },
      h3: {
        color: theme("colors.gray.100"),
        ...transitionCommonSettings,
      },
      h4: {
        color: theme("colors.gray.100"),
        ...transitionCommonSettings,
      },
      figcaption: {
        color: theme("colors.gray.400"),
        ...transitionCommonSettings,
      },
      code: {
        color: theme("colors.gray.100"),
        ...transitionCommonSettings,
      },
      thead: {
        color: theme("colors.gray.100"),
        borderBottomColor: theme("colors.gray.600"),
        ...transitionCommonSettings,
      },
      "tbody tr": {
        borderBottomColor: theme("colors.gray.700"),
        ...transitionCommonSettings,
        transitionProperty: "border-color", // Override
      },
    },
  },
});
