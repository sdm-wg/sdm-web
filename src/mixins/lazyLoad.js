export default {
  methods: {
    lazySrc: function (src) {
      if (src.startsWith("http")) {
        // cannot lazy load
        return src;
      }

      if (src.startsWith("/")) {
        src = src.slice(1);
      }
      return require(`!!assets-loader!~/assets/${src}`);
    },
  },
};
