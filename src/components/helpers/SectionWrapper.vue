<template>
  <div
    class="w-full py-4"
    :class="{
      'bg-opacity-25 transition-set': isEven,
      'bg-gray-600': isDark && isEven,
      'bg-gray-400': !isDark && isEven,
    }"
  >
    <section :id="sectionId" class="flex flex-wrap w-full container mx-auto">
      <div class="w-full">
        <h1
          class="font-bold text-center text-4xl sm:text-5xl md:text-6xl transition-set"
          :class="{
            'text-gray-100': isDark,
            'text-gray-900': !isDark,
          }"
        >
          <slot name="heading" />
        </h1>
      </div>
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "SectionWrapper",
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
};
</script>
