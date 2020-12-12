<template>
  <SectionWrapper :isDark="isDark" :isEven="isEven" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("project.heading") }}</template>
    <ProjectCard
      v-for="project in $static.projects.edges"
      :key="project.node.id"
      :isDark="isDark"
      :project="project"
    />
  </SectionWrapper>
</template>

<static-query>
query {
  projects: allProject(sortBy: "id", order: ASC) {
    edges {
      node {
        id
        name {
          ja
          en
        }
        image
        summary {
          ja
          en
        }
        home
      }
    }
  }
}
</static-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import ProjectCard from "~/components/helpers/ProjectCard.vue";

export default {
  name: "ProjectSection",
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
    ProjectCard,
  },
};
</script>
