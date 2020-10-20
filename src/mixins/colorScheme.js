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
      this.isDarkMQL.addEventListener("change", this.MQLHandler, false);
      this.MQLHandler(this.isDarkMQL);
    }
  },
  destroyed: function () {
    if (process.browser) {
      this.isDarkMQL.removeEventListener("change", this.MQLHandler, false);
    }
  },
};
