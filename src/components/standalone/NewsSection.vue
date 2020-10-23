<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("news.heading") }}</template>
    <PressReleaseSubSection :isDark="isDark" sectionId="pressReleases" />
    <AwardSubSection :isDark="isDark" sectionId="awards" />
    <MediaSubSection :isDark="isDark" sectionId="media" />
  </SectionWrapper>
</template>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import PressReleaseSubSection from "~/components/standalone/PressReleaseSubSection.vue";
import AwardSubSection from "~/components/standalone/AwardSubSection.vue";
import MediaSubSection from "~/components/standalone/MediaSubSection.vue";

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
    SectionWrapper,
    PressReleaseSubSection,
    AwardSubSection,
    MediaSubSection,
  },
};
</script>
