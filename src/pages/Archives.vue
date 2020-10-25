<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <SectionWrapper :isDark="isDark" :isEven="true" sectionId="archives">
      <template v-slot:heading>{{ $t("archive.heading") }}</template>

      <TaxonomyItem
        v-for="archive in monthlyArchives"
        :key="archive.node.id"
        :isDark="isDark"
        :taxonomy="archive"
      >
        <template v-slot:icon>
          <font-awesome
            class="mr-1"
            :icon="['fas', 'calendar-alt']"
            fixed-width
          />
        </template>
      </TaxonomyItem>
    </SectionWrapper>
  </Layout>
</template>

<page-query>
query {
  archives: allArchive {
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
  name: "Archives",
  metaInfo: function () {
    return {
      title: "Archives",
    };
  },
  mixins: [localeMixin, colorSchemeMixin],
  computed: {
    monthlyArchives: function () {
      return this.$page.archives.edges.filter((archive) =>
        /^\d{4}-\d{2}$/.test(archive.node.id)
      );
    },
  },
  components: {
    SectionWrapper,
    TaxonomyItem,
  },
};
</script>
