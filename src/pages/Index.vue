<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <!-- About -->
    <AboutSection :isDark="isDark" :isEven="false" sectionId="about" />
    <EventSection :isDark="isDark" :isEven="true" sectionId="events" />
  </Layout>
</template>

<script>
import AboutSection from "~/components/standalone/AboutSection.vue";
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
    EventSection,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
