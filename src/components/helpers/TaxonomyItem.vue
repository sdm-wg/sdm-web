<template>
  <div class="w-full p-4 border-t border-gray-400">
    <div
      class="flex flex-row justify-between items-center w-full text-base sm:text-lg md:text-xl transition-set"
      :class="{
        'text-gray-100': isDark,
        'text-gray-900': !isDark,
      }"
    >
      <span class="font-bold">
        <slot name="icon" />
        <flex-link
          :class="{
            'hover:text-blue-500': isDark,
            'hover:text-orange-500': !isDark,
          }"
          :to="taxonomy.node.path"
        >
          {{ taxonomy.node.id }}
        </flex-link>
      </span>
      <span class="font-semibold">
        {{ taxonomy.node.belongsTo.totalCount }}
        <span v-if="taxonomy.node.belongsTo.totalCount === 1">Post</span>
        <span v-else>Posts</span>
      </span>
    </div>
  </div>
</template>

<script>
import localeMixin from "~/mixins/locale.js";

export default {
  name: "TaxonomyItem",
  mixins: [localeMixin],
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    taxonomy: {
      type: Object,
      required: true,
    },
  },
};
</script>
