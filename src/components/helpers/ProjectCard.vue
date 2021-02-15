<template>
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <div
      class="rounded overflow-hidden shadow-lg transition-set"
      :class="{
        'bg-gray-900': isDark,
        'bg-white': !isDark,
      }"
    >
      <div class="relative w-full pb-full">
        <g-image
          v-if="project.node.image"
          class="absolute w-full h-full object-cover"
          :src="lazySrc(project.node.image)"
          :alt="project.node.name[language]"
        />
        <g-image
          v-else
          class="absolute w-full h-full object-cover bg-white"
          src="~/assets/images/sdm-logo-square.png"
          :alt="project.node.name[language]"
        />
      </div>
      <div
        class="pt-4 font-bold text-xl text-center transition-set"
        :class="{
          'text-gray-100': isDark,
          'text-gray-900': !isDark,
        }"
      >
        {{ project.node.name[language] }}
      </div>
      <div
        class="text-lg text-center transition-set"
        :class="{
          'text-gray-300': isDark,
          'text-gray-700': !isDark,
        }"
      >
        {{ project.node.summary[language] }}
      </div>
      <div
        class="py-4 text-base text-center transition-set"
        :class="{
          'text-gray-300': isDark,
          'text-gray-700': !isDark,
        }"
      >
        <flex-link
          v-if="project.node.home"
          class="mx-1"
          :class="{
            'hover:text-blue-500': isDark,
            'hover:text-orange-500': !isDark,
          }"
          :to="project.node.home"
        >
          <font-awesome :icon="['fas', 'home']" size="lg" fixed-width />
        </flex-link>
      </div>
    </div>
  </div>
</template>

<script>
import localeMixin from "~/mixins/locale.js";
import lazyLoadMixin from "~/mixins/lazyLoad.js";

export default {
  name: "ProjectCard",
  mixins: [localeMixin, lazyLoadMixin],
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
