<template>
  <div class="w-full md:w-1/2 lg:w-1/3 p-4">
    <div class="flex items-center">
      <div
        class="p-3 transition-set"
        :class="{
          'text-gray-300': isDark,
          'text-gray-700': !isDark,
        }"
      >
        <slot name="icon" />
      </div>
      <div class="flex-1">
        <h3
          class="font-bold text-sm sm:text-base transition-set"
          :class="{
            'text-gray-100': isDark,
            'text-gray-900': !isDark,
          }"
        >
          <slot name="heading" />
        </h3>
      </div>
    </div>
    <div class="px-2">
      <p
        class="text-sm break-words transition-set"
        :class="{
          'text-gray-300': isDark,
          'text-gray-700': !isDark,
        }"
      >
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
