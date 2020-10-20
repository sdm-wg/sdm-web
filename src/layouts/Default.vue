<template>
  <div class="flex flex-col w-full min-h-screen">
    <HeaderNav :isDark="isDark" :isTop="isTop" />
    <ContentWrapper :isDark="isDark">
      <slot />
    </ContentWrapper>
    <FooterWrapper :isDark="isDark" class="flex-1">
      <span class="block py-8 font-bold text-center">
        Copyright © Software Defined Media Consortium 2020
      </span>
    </FooterWrapper>
  </div>
</template>

<script>
import ContentWrapper from "~/components/atoms/ContentWrapper.vue";
import FooterWrapper from "~/components/atoms/FooterWrapper.vue";
import HeaderNav from "~/components/standalone/HeaderNav.vue";

import scrollPositionMixin from "~/mixins/scrollPosition.js";

export default {
  name: "Home",
  mixins: [scrollPositionMixin],
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    ContentWrapper,
    FooterWrapper,
    HeaderNav,
  },
};
</script>
