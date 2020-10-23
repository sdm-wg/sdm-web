<template>
  <SubSectionWrapper :isDark="isDark" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("news.award.heading") }}</template>
    <PostCard
      v-for="event in $static.events.edges"
      :key="event.node.id"
      :isDark="isDark"
      :post="event"
    />
  </SubSectionWrapper>
</template>

<static-query>
query {
  events: allPost(filter: { tags: { contains: ["award"] } }) {
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
