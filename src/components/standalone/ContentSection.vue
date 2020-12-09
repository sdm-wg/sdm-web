<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("content.heading") }}</template>
    <ContentCard
      v-for="content in $static.contents.edges"
      :key="content.node.id"
      :isDark="isDark"
      :content="content"
    />
  </SectionWrapper>
</template>

<static-query>
query {
  contents: allContent(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        name {
          ja
          en
        }
        image
        summary {
          ja
          en
        }
        home
      }
    }
  }
}
</static-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import ContentCard from "~/components/helpers/ContentCard.vue";

export default {
  name: "ContentSection",
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
    ContentCard,
  },
};
</script>
