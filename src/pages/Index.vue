<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <!-- About -->
    <AboutSection :isDark="isDark" :isEven="false" sectionId="about" />
    <NoticeSection :isDark="isDark" :isEven="true" sectionId="notices" />
    <EventSection :isDark="isDark" :isEven="false" sectionId="events" />
  </Layout>
</template>

<script>
import AboutSection from "~/components/standalone/AboutSection.vue";
import NoticeSection from "~/components/standalone/NoticeSection.vue";
import EventSection from "~/components/standalone/EventSection.vue";

import colorSchemeMixin from "~/mixins/colorScheme.js";

export default {
  name: "Index",
  metaInfo: {
    title: "SDM",
  },
  mixins: [colorSchemeMixin],
  components: {
    AboutSection,
    NoticeSection,
    EventSection,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
