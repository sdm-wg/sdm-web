<template>
  <div class="flex flex-col w-full min-h-screen">
    <HeaderNav
      @receive-toggle-dark="emitToggleDark"
      :isDark="isDark"
      :isTop="isTop"
    />
    <ContentWrapper :isDark="isDark">
      <div
        class="flex items-center w-full h-64 md:h-128 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500"
      >
        <g-image
          v-if="coverImage"
          class="relative w-full h-full object-cover bg-white"
          :src="lazySrc(coverImage)"
        />
        <div v-else class="absolute w-full">
          <div class="container mx-auto px-4">
            <SDMBannerSVG class="w-full text-black" />
          </div>
        </div>
      </div>

      <slot />
    </ContentWrapper>
    <FooterWrapper :isDark="isDark" class="flex-1">
      <span class="block px-4 py-8 font-bold text-center">
        Copyright © Software Defined Media Consortium
      </span>
    </FooterWrapper>
  </div>
</template>

<script>
import SDMBannerSVG from "~/components/atoms/SDMBannerSVG.vue";
import ContentWrapper from "~/components/atoms/ContentWrapper.vue";
import FooterWrapper from "~/components/atoms/FooterWrapper.vue";
import HeaderNav from "~/components/standalone/HeaderNav.vue";

import scrollPositionMixin from "~/mixins/scrollPosition.js";
import lazyLoadMixin from "~/mixins/lazyLoad.js";

export default {
  name: "Home",
  mixins: [scrollPositionMixin, lazyLoadMixin],
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    coverImage: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    emitToggleDark: function () {
      this.$emit("receive-toggle-dark");
    },
  },
  components: {
    SDMBannerSVG,
    ContentWrapper,
    FooterWrapper,
    HeaderNav,
  },
};
</script>
