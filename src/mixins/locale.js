export default {
  computed: {
    anotherLocale: function () {
      if (this.$context.locale === "en-us") {
        return "ja-jp";
      } else {
        return "en-us";
      }
    },
    language: function () {
      return this.localeLanguage(this.$context.locale);
    },
    anotherLanguage: function () {
      return this.localeLanguage(this.anotherLocale);
    },
  },
  methods: {
    localeLanguage: function (locale) {
      return locale.slice(0, 2);
    },
  },
};
