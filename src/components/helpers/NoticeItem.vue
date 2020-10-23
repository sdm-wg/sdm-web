<template>
  <div class="flex flex-wrap sm:flex-no-wrap items-start w-full p-4">
    <div class="flex items-center w-full sm:w-auto">
      <div
        class="p-3 sm:py-0 transition-set"
        :class="{
          'text-gray-300': isDark,
          'text-gray-700': !isDark,
        }"
      >
        <font-awesome
          v-if="notice.node.isDone"
          :icon="['fas', 'calendar-check']"
          size="2x"
          fixed-width
        />
        <font-awesome
          v-else
          :icon="['fas', 'calendar']"
          size="2x"
          fixed-width
        />
      </div>
      <div>
        <h3
          class="font-bold text-sm sm:text-base sm:whitespace-no-wrap transition-set"
          :class="{
            'text-gray-100': isDark,
            'text-gray-900': !isDark,
          }"
        >
          {{ notice.node.date }}
        </h3>
      </div>
    </div>
    <div class="px-2 sm:pl-4">
      <p
        class="text-sm transition-set"
        :class="{
          'text-gray-300': isDark,
          'text-gray-700': !isDark,
        }"
      >
        {{ notice.node.content[language] }}
      </p>
    </div>
  </div>
</template>

<script>
import localeMixin from "~/mixins/locale.js";

export default {
  name: "NoticeItem",
  mixins: [localeMixin],
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    notice: {
      type: Object,
      required: true,
    },
  },
};
</script>
