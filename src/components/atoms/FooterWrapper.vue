<template>
  <footer
    class="w-full border-t border-gray-400 transition-set"
    :class="{
      'bg-gray-900 text-gray-100': isDark,
      'bg-white text-gray-900': !isDark,
    }"
  >
    <slot />
  </footer>
</template>

<script>
export default {
  name: "FooterWrapper",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
