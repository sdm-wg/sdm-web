<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("publication.heading") }}</template>
    <LangPublicationSubSection
      :isDark="isDark"
      lang="en"
      sectionId="enPublications"
      :publications="filterPublications('en')"
    />
    <LangPublicationSubSection
      :isDark="isDark"
      lang="ja"
      sectionId="jaPublications"
      :publications="filterPublications('ja')"
    />
  </SectionWrapper>
</template>

<static-query>
query {
  publications: allPublication {
    edges {
      node {
        id
        type
        title {
          ja
          en
        }
        author {
          ja
          en
        }
        info {
          ja
          en
        }
        note {
          ja
          en
        }
        lang
        date(format: "YYYY-MM-DD")
        url
        github
        youtube
        doi
      }
    }
  }
}
</static-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import LangPublicationSubSection from "~/components/standalone/LangPublicationSubSection.vue";

export default {
  name: "PublicationSection",
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
  methods: {
    filterPublications: function (lang) {
      return this.$static.publications.edges.filter(
        (publication) => publication.node.lang === lang
      );
    },
  },
  components: {
    SectionWrapper,
    LangPublicationSubSection,
  },
};
</script>
