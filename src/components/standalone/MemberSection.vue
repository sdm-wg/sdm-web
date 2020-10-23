<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("member.heading") }}</template>
    <MemberCard
      v-for="member in $static.members.edges"
      :key="member.node.id"
      :isDark="isDark"
      :member="member"
    />
  </SectionWrapper>
</template>

<static-query>
query {
  members: allMember(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        name {
          ja
          en
        }
        image
        roll {
          ja
          en
        }
        home
        facebook
      }
    }
  }
}
</static-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import MemberCard from "~/components/helpers/MemberCard.vue";

export default {
  name: "MemberSection",
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
    MemberCard,
  },
};
</script>
