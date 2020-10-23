<template>
  <SubSectionWrapper :isDark="isDark" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("news.award.heading") }}</template>
    <PostCard
      v-for="award in $static.awards.edges"
      :key="award.node.id"
      :isDark="isDark"
      :post="award"
    />
  </SubSectionWrapper>
</template>

<static-query>
query {
  awards: allPost(filter: { tags: { contains: ["award"] } }) {
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
  name: "AwardSubSection",
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
    SubSectionWrapper,
    PostCard,
  },
};
</script>
