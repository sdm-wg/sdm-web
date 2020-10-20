export default {
  data: () => {
    return {
      scrollPosition: null,
    };
  },
  computed: {
    isTop: function () {
      return this.scrollPosition <= 0;
    },
  },
  methods: {
    scrollHandler: function () {
      this.scrollPosition = window.scrollY;
    },
  },
  created: function () {
    if (process.browser) {
      window.addEventListener("scroll", this.scrollHandler, false);
      this.scrollPosition = window.scrollY;
    }
  },
  destroyed: function () {
    if (process.browser) {
      window.removeEventListener("scroll", this.scrollHandler, false);
    }
  },
};
