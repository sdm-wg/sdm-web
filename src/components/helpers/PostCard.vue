<template>
  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
    <div
      class="rounded overflow-hidden shadow-lg transition-set"
      :class="{
        'bg-gray-900': isDark,
        'bg-white': !isDark,
      }"
    >
      <flex-link :to="post.node.path">
        <g-image
          v-if="post.node.image === ''"
          class="w-full h-64 object-cover bg-white"
          src="~/assets/images/sdm-logo-square.png"
          :alt="post.node.title"
        />
        <g-image
          v-else
          class="w-full h-64 object-cover"
          :src="post.node.image"
          :alt="post.node.title"
        />
      </flex-link>
      <div class="h-40 px-6 py-4">
        <div
          class="mb-2 font-bold text-xl truncate transition-set"
          :class="{
            'text-gray-100': isDark,
            'text-gray-900': !isDark,
          }"
        >
          <flex-link
            :class="{
              'hover:text-blue-500': isDark,
              'hover:text-orange-500': !isDark,
            }"
            :to="post.node.path"
          >
            {{ post.node.title[language] }}
          </flex-link>
        </div>
        <div
          class="my-2 text-sm transition-set"
          :class="{
            'text-gray-100': isDark,
            'text-gray-900': !isDark,
          }"
        >
          <font-awesome :icon="['fas', 'calendar-alt']" fixed-width />
          <flex-link
            :class="{
              'hover:text-blue-500': isDark,
              'hover:text-orange-500': !isDark,
            }"
            :to="post.node.archives[1].path"
          >
            {{ post.node.date }}
          </flex-link>
        </div>
        <p
          class="text-base line-clamp3 overflow-hidden transition-set"
          :class="{
            'text-gray-300': isDark,
            'text-gray-700': !isDark,
          }"
        >
          {{ post.node.summary[language] }}
        </p>
      </div>
      <div class="px-6 py-2">
        <span
          v-for="tag in post.node.tags"
          :key="tag.id"
          class="inline-block mr-2 mb-2 px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-semibold"
        >
          <flex-link
            :class="{
              'hover:text-blue-500': isDark,
              'hover:text-orange-500': !isDark,
            }"
            :to="tag.path"
          >
            #{{ tag.id }}
          </flex-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import localeMixin from "~/mixins/locale.js";

export default {
  name: "PostCard",
  mixins: [localeMixin],
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
