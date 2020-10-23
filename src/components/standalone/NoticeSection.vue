<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("notice.heading") }}</template>
    <NoticeItem
      v-for="notice in recentNotices"
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

import moment from "moment";

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
  data: () => {
    return {
      recentNotices: [],
    };
  },
  mounted: function () {
    // Extract future notices and up to three done notice
    const now = moment();

    const doneLimit = 3;
    let doneCount = 0;
    this.recentNotices = this.$static.notices.edges.filter((notice) => {
      if (doneCount === doneLimit) {
        return false;
      }

      const noticeDay = moment(notice.node.date);
      const isDone = noticeDay.isBefore(now, "day");
      doneCount += isDone;
      notice.node.isDone = isDone;

      return true;
    });
  },
  components: {
    SectionWrapper,
    NoticeItem,
  },
};
</script>
