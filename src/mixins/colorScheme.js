export default {
  data: () => {
    return {
      isDarkMQL: null,
    };
  },
  computed: {
    isDark: function () {
      return this.$store.getters.getIsDark;
    },
  },
  methods: {
    setIsDark: function (isDark) {
      this.$store.commit("setIsDark", isDark);
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

      if (this.isDark === null) {
        this.MQLHandler(this.isDarkMQL);
      }
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
