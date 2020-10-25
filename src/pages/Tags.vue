<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <SectionWrapper :isDark="isDark" :isEven="true" sectionId="tags">
      <template v-slot:heading>{{ $t("tag.heading") }}</template>

      <TaxonomyItem
        v-for="tag in $page.tags.edges"
        :key="tag.node.id"
        :isDark="isDark"
        :taxonomy="tag"
      >
        <template v-slot:icon>
          <font-awesome class="mr-1" :icon="['fas', 'tag']" fixed-width />
        </template>
      </TaxonomyItem>
    </SectionWrapper>
  </Layout>
</template>

<page-query>
query {
  tags: allTag {
    edges {
      node {
        id
        path
        belongsTo {
          totalCount
        }
      }
    }
  }
}
</page-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import TaxonomyItem from "~/components/helpers/TaxonomyItem.vue";

import localeMixin from "~/mixins/locale.js";
import colorSchemeMixin from "~/mixins/colorScheme.js";

export default {
  name: "Tags",
  metaInfo: function () {
    return {
      title: "Tags",
    };
  },
  mixins: [localeMixin, colorSchemeMixin],
  components: {
    SectionWrapper,
    TaxonomyItem,
  },
};
</script>
