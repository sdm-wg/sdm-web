<template>
  <div
    class="w-full transition-set"
    :class="{
      'bg-black-alt': isDark,
      'bg-gray-100': !isDark,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ContentWrapper",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
