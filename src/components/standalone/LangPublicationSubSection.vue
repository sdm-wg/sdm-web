<template>
  <SubSectionWrapper :isDark="isDark" :sectionId="sectionId">
    <template v-slot:heading>{{ $t(`publication.${lang}.heading`) }}</template>
    <CitationItem
      v-for="publication in publications"
      :key="publication.node.id"
      :isDark="isDark"
      :publication="publication"
    />
  </SubSectionWrapper>
</template>

<script>
import SubSectionWrapper from "~/components/helpers/SubSectionWrapper.vue";
import CitationItem from "~/components/helpers/CitationItem.vue";

export default {
  name: "LangPublicationSubSection",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
    sectionId: {
      type: String,
      required: true,
    },
    publications: {
      type: Array,
      required: true,
    },
  },
  components: {
    SubSectionWrapper,
    CitationItem,
  },
};
</script>
