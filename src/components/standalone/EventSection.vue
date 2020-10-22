<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("event.heading") }}</template>
    <div
      v-for="event in $static.events.edges"
      :key="event.node.id"
      class="w-full md:w-1/2 lg:w-1/4 p-4"
    >
      <PostCard :isDark="isDark" :post="event" />
    </div>
  </SectionWrapper>
</template>

<static-query>
query {
  events: allPost(filter: { tags: { contains: ["event"] } }) {
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
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import PostCard from "~/components/helpers/PostCard.vue";

export default {
  name: "EventSection",
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
    PostCard,
  },
};
</script>
