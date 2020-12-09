<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <!-- About -->
    <AboutSection :isDark="isDark" :isEven="false" sectionId="about" />
    <NoticeSection :isDark="isDark" :isEven="true" sectionId="notices" />
    <EventSection :isDark="isDark" :isEven="false" sectionId="events" />
    <NewsSection :isDark="isDark" :isEven="true" sectionId="news" />
    <MemberSection :isDark="isDark" :isEven="false" sectionId="members" />
    <PublicationSection
      :isDark="isDark"
      :isEven="true"
      sectionId="publications"
    />
    <ContentSection :isDark="isDark" :isEven="false" sectionId="content" />
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
import ContentSection from "~/components/standalone/ContentSection.vue";
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
    EventSection,
    NewsSection,
    MemberSection,
    PublicationSection,
    ContentSection,
    ContactSection,
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
