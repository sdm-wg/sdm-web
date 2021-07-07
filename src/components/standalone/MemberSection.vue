<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("member.heading") }}</template>
    <MemberCard
      v-for="member in $static.members.edges"
      :key="member.node.id"
      :isDark="isDark"
      :member="member"
    />
    <!-- ! This is anti pattern of Vue-Template -->
    <div is="style" type="text/css">
      .brands { color: #313437; background-color: #fff; } .brands a { display:
      block; text-align: center; padding: 40px 0; } @media (max-width: 767px) {
      .brands a { padding: 30px 0; } } .brands a img { display: inline-block;
      margin: 10px 20px; vertical-align: middle; }
    </div>
    <div class="brands">
      <a href="#">
        <img
          src="/images/logos/utokyo-341x89.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/keio-302x116.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/yamaha-534x122.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/dolby-534x116.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/ntt-337x118.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/kddi-200x110.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/panasonic-362x110.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/bandai-namco-studios-138x120.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/aeon-entertainment-228x120.jpg"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/dell-logo-120x120.jpg"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/aplix-370x116.jpg"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/alphacode-534x114.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/mi7-logo-320x80.png"
          style="height: 40px"
          alt
          title
        />
        <img
          src="/images/logos/synthax-logo-534x123.jpg"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/tspots-logo-84x120.png"
          style="height: 60px"
          alt
          title
        />
        <img
          src="/images/logos/msi-japan-239x420.png"
          style="height: 60px"
          alt
          title
        />
        <img src="/images/logos/sed-logo.gif" style="height: 60px" alt title />
      </a>
    </div>
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
