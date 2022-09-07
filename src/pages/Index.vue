<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <!-- About -->
    <AboutSection :isDark="isDark" :isEven="false" sectionId="about" />
    <NoticeSection :isDark="isDark" :isEven="true" sectionId="notices" />
    <NewsSection :isDark="isDark" :isEven="true" sectionId="news" />
    <EventSection :isDark="isDark" :isEven="false" sectionId="events" />
    <MemberSection :isDark="isDark" :isEven="false" sectionId="members" />
    <PublicationSection
      :isDark="isDark"
      :isEven="true"
      sectionId="publications"
    />
    <ProjectSection :isDark="isDark" :isEven="false" sectionId="project" />
    <ContactSection :isDark="isDark" :isEven="true" sectionId="contact" />
  </Layout>
</template>

<script>
import AboutSection from "~/components/standalone/AboutSection.vue";
import NoticeSection from "~/components/standalone/NoticeSection.vue";
import EventSection from "~/components/standalone/EventSection.vue";
import NewsSection from "~/components/standalone/NewsSection.vue";
import MemberSection from "~/components/standalone/MemberSection.vue";
import PublicationSection from "~/components/standalone/PublicationSection.vue";
import ProjectSection from "~/components/standalone/ProjectSection.vue";
import ContactSection from "~/components/standalone/ContactSection.vue";

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
    NewsSection,
    EventSection,
    MemberSection,
    PublicationSection,
    ProjectSection,
    ContactSection,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
