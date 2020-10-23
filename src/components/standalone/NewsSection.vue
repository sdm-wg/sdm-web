<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("news.heading") }}</template>
    <PressReleaseSubSection :isDark="isDark" sectionId="pressReleases" />
  </SectionWrapper>
</template>

<script>
import PressReleaseSubSection from "~/components/standalone/PressReleaseSubSection.vue";
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";

export default {
  name: "NewsSection",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    isEven: {
      type: Boolean,
      required: false,
      default: false,
    },
    sectionId: {
      type: String,
      required: true,
    },
  },
  components: {
    PressReleaseSubSection,
    SectionWrapper,
  },
};
</script>
