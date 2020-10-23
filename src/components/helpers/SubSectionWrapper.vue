<template>
  <div class="w-full py-4">
    <section :id="sectionId" class="flex flex-wrap w-full container mx-auto">
      <div class="w-full">
        <h2
          class="font-semibold text-center text-3xl sm:text-4xl md:text-5xl transition-set"
          :class="{
            'text-gray-100': isDark,
            'text-gray-900': !isDark,
          }"
        >
          <slot name="heading" />
        </h2>
      </div>
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "SubSectionWrapper",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    sectionId: {
      type: String,
      required: true,
    },
  },
};
</script>
