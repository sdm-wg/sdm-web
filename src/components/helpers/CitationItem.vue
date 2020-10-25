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
      <p
        v-if="publication.node.note[language]"
        class="font-semibold text-base sm:text-lg text-red-500"
      >
        {{ publication.node.note[language] }}
      </p>
      <div
        class="flex flex-wrap items-center transition-set"
        :class="{
          'text-gray-300': isDark,
          'text-gray-700': !isDark,
        }"
      >
        <!-- Publication type -->
        <div class="mr-1">
          <span
            class="px-2 rounded text-white transition-set"
            :class="{
              'bg-blue-500': isDark,
              'bg-orange-500': !isDark,
            }"
          >
            {{ publication.node.type }}
          </span>
        </div>

        <!-- DOI -->
        <div v-if="publication.node.doi" class="mr-1">
          <flex-link :to="`https://doi.org/${publication.node.doi}`">
            <img
              :src="`https://zenodo.org/badge/DOI/${publication.node.doi}.svg`"
              alt="DOI"
            />
          </flex-link>
        </div>

        <!-- PDF/Web -->
        <div v-if="publication.node.url" class="mr-1">
          <flex-link
            :class="{
              'hover:text-blue-500': isDark,
              'hover:text-orange-500': !isDark,
            }"
            :to="publication.node.url"
          >
            <font-awesome
              v-if="publication.node.url.toLowerCase().endsWith('.pdf')"
              :icon="['fas', 'file-pdf']"
              fixed-width
            />
            <font-awesome v-else :icon="['fas', 'link']" fixed-width />
          </flex-link>
        </div>

        <!-- Github -->
        <div v-if="publication.node.github" class="mr-1">
          <flex-link
            :class="{
              'hover:text-blue-500': isDark,
              'hover:text-orange-500': !isDark,
            }"
            :to="publication.node.github"
          >
            <font-awesome :icon="['fab', 'github']" fixed-width />
          </flex-link>
        </div>

        <!-- YouTube -->
        <div v-if="publication.node.youtube" class="mr-1">
          <flex-link
            :class="{
              'hover:text-blue-500': isDark,
              'hover:text-orange-500': !isDark,
            }"
            :to="publication.node.youtube"
          >
            <font-awesome :icon="['fab', 'youtube']" fixed-width />
          </flex-link>
        </div>
      </div>
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
