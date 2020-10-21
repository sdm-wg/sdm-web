<template>
  <SectionWrapper :isDark="isDark" sectionId="about">
    <template v-slot:heading>{{ $t("about.heading") }}</template>
    <AboutCard
      v-for="(content, index) in $t('about.contents')"
      :key="index"
      :isDark="isDark"
    >
      <template v-slot:icon>
        <font-awesome :icon="faIcons[index]" size="2x" fixed-width />
      </template>
      <template v-slot:heading>
        {{ content.heading }}
      </template>
      <template>
        {{ content.content }}
      </template>
    </AboutCard>
  </SectionWrapper>
</template>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import AboutCard from "~/components/helpers/AboutCard.vue";

export default {
  name: "AboutSection",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
  data: () => {
    return {
      faIcons: [
        ["fas", "music"],
        ["fas", "map-marker-alt"],
        ["fas", "cloud"],
      ],
    };
  },
  components: {
    SectionWrapper,
    AboutCard,
  },
};
</script>
