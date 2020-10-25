<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <SectionWrapper :isDark="isDark" :isEven="true" sectionId="tag">
      <template v-slot:heading>{{ heading }}</template>
      <PostCard
        v-for="post in $page.tag.belongsTo.edges"
        :key="post.node.id"
        :isDark="isDark"
        :post="post"
      />
    </SectionWrapper>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  tag(id: $id) {
    id
    belongsTo {
      edges {
        node {
          ... on Post {
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
  }
}
</page-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import PostCard from "~/components/helpers/PostCard.vue";

import localeMixin from "~/mixins/locale.js";
import colorSchemeMixin from "~/mixins/colorScheme.js";

import { unslug } from "~/utils/stringHandler.js";

export default {
  name: "Tag",
  metaInfo: function () {
    return {
      title: `Tag: ${this.$page.tag.id}`,
    };
  },
  mixins: [localeMixin, colorSchemeMixin],
  computed: {
    heading: function () {
      return unslug(this.$page.tag.id);
    },
  },
  components: {
    SectionWrapper,
    PostCard,
  },
};
</script>
