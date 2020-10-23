<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("notice.heading") }}</template>
    <NoticeItem
      v-for="notice in $static.notices.edges"
      :key="notice.node.id"
      :isDark="isDark"
      :notice="notice"
    />
  </SectionWrapper>
</template>

<static-query>
query {
  notices: allNotice {
    edges {
      node {
        id
        date(format: "YYYY-MM-DD")
        content {
          ja
          en
        }
      }
    }
  }
}
</static-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import NoticeItem from "~/components/helpers/NoticeItem.vue";

export default {
  name: "NoticeSection",
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
    NoticeItem,
  },
};
</script>
