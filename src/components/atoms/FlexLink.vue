<template>
  <a v-if="isAnchorLink" :href="to"><slot /></a>
  <g-link v-else :to="to"><slot /></g-link>
</template>

<script>
export default {
  name: "FlexLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    isAnchorLink: function () {
      return this.to.startsWith("#");
    },
  },
};
</script>
