<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <!-- About -->
    <AboutSection :isDark="isDark" />
  </Layout>
</template>

<script>
import AboutSection from "~/components/standalone/AboutSection.vue";

import colorSchemeMixin from "~/mixins/colorScheme.js";

export default {
  name: "Index",
  metaInfo: {
    title: "SDM",
  },
  mixins: [colorSchemeMixin],
  components: {
    AboutSection,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
