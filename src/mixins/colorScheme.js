export default {
  data: () => {
    return {
      isDark: null,
      isDarkMQL: null,
    };
  },
  methods: {
    setIsDark: function (isDark) {
      this.isDark = isDark;
    },
    toggleDark: function () {
      this.setIsDark(!this.isDark);
    },
    MQLHandler: function (event) {
      this.setIsDark(event.matches);
    },
  },
  created: function () {
    if (process.browser) {
      this.isDarkMQL = window.matchMedia("(prefers-color-scheme: dark)");

      if (this.isDarkMQL.addEventListener) {
        this.isDarkMQL.addEventListener("change", this.MQLHandler, false);
      } else {
        // For iOS Safari
        this.isDarkMQL.addListener(this.MQLHandler);
      }

      this.MQLHandler(this.isDarkMQL);
    }
  },
  destroyed: function () {
    if (process.browser) {
      if (this.isDarkMQL.removeEventListener) {
        this.isDarkMQL.removeEventListener("change", this.MQLHandler, false);
      } else {
        // For iOS Safari
        this.isDarkMQL.removeListener(this.MQLHandler);
      }
    }
  },
};
