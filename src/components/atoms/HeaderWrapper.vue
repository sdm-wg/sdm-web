<template>
  <header
    class="fixed top-0 z-10 w-full hover:bg-opacity-100 hover:shadow transition-set"
    :class="{
      'bg-gray-900': isDark,
      'bg-white': !isDark,
      'bg-opacity-0': isTop,
      shadow: !isTop,
    }"
  >
    <slot />
  </header>
</template>

<script>
export default {
  name: "HeaderWrapper",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    isTop: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
