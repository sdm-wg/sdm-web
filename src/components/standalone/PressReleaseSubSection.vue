<template>
  <SubSectionWrapper :isDark="isDark" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("news.pressRelease.heading") }}</template>
    <PostCard
      v-for="pressRelease in $static.pressReleases.edges"
      :key="pressRelease.node.id"
      :isDark="isDark"
      :post="pressRelease"
    />
  </SubSectionWrapper>
</template>

<static-query>
query {
  pressReleases: allPost(filter: { tags: { contains: ["press release"] } }) {
    edges {
      node {
        id
        path
        title {
          ja
          en
        }
        summary {
          ja
          en
        }
        tags {
          id
          path
        }
        date(format: "YYYY-MM-DD")
        archives {
          id
          path
        }
        image
      }
    }
  }
}
</static-query>

<script>
import SubSectionWrapper from "~/components/helpers/SubSectionWrapper.vue";
import PostCard from "~/components/helpers/PostCard.vue";

export default {
  name: "PressReleaseSubSection",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    sectionId: {
      type: String,
      required: true,
    },
  },
  components: {
    SubSectionWrapper,
    PostCard,
  },
};
</script>
