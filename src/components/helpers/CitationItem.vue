<template>
  <div class="w-full px-4 pt-4">
    <div
      class="p-4 border-l-8 transition-set"
      :class="{
        'bg-gray-900 border-blue-500': isDark,
        'bg-white border-orange-500': !isDark,
      }"
    >
      <h3
        class="font-bold text-lg sm:text-xl transition-set"
        :class="{
          'text-gray-100': isDark,
          'text-gray-900': !isDark,
        }"
      >
        {{ publication.node.title[language] }}
      </h3>
      <p
        class="text-base sm:text-lg transition-set"
        :class="{
          'text-gray-100': isDark,
          'text-gray-900': !isDark,
        }"
      >
        {{ publication.node.author[language] }}
      </p>
      <p
        class="text-base sm:text-lg transition-set"
        :class="{
          'text-gray-300': isDark,
          'text-gray-700': !isDark,
        }"
      >
        {{ publication.node.info[language] }}
      </p>
    </div>
  </div>
</template>

<script>
import localeMixin from "~/mixins/locale.js";

export default {
  name: "CitationItem",
  mixins: [localeMixin],
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    publication: {
      type: Object,
      required: true,
    },
  },
};
</script>
