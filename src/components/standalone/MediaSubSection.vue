<template>
  <SubSectionWrapper :isDark="isDark" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("news.media.heading") }}</template>

    <!-- Media Table -->
    <div class="flex flex-col w-full p-4">
      <div class="-my-2 sm:-mx-6 lg:-mx-8">
        <div class="w-full py-2 sm:px-6 lg:px-8 align-middle inline-block">
          <div
            class="rounded-lg overflow-x-auto shadow transition-set"
            :class="{
              'bg-gray-900': isDark,
              'bg-white': !isDark,
            }"
          >
            <table class="w-full divide-y divide-gray-400">
              <thead>
                <tr
                  class="font-bold text-left text-sm sm:text-base uppercase tracking-wider transition-set"
                  :class="{
                    'text-gray-100': isDark,
                    'text-gray-900': !isDark,
                  }"
                >
                  <th class="px-3 py-3">Date</th>
                  <th class="px-3 py-3">Title</th>
                  <th class="px-3 py-3">Type</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-400">
                <tr
                  v-for="media in $static.media.edges"
                  :key="media.node.id"
                  class="transition-set"
                  :class="{
                    'text-gray-300': isDark,
                    'text-gray-700': !isDark,
                  }"
                >
                  <td class="px-3 py-3 whitespace-no-wrap">
                    {{ media.node.date }}
                  </td>
                  <td class="px-3 py-3">
                    <span>{{ media.node.title[language] }}</span>
                  </td>
                  <td class="px-3 py-3">
                    <flex-link
                      v-if="media.node.url"
                      class="underline"
                      :class="{
                        'hover:text-blue-500': isDark,
                        'hover:text-orange-500': !isDark,
                      }"
                      :to="media.node.url"
                    >
                      {{ media.node.type }}
                    </flex-link>
                    <span v-else>{{ media.node.type }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Media Table -->
  </SubSectionWrapper>
</template>

<static-query>
query {
  media: allMedia {
    edges {
      node {
        id
        date(format: "YYYY-MM-DD")
        title {
          ja
          en
        }
        type
        url
      }
    }
  }
}
</static-query>

<script>
import SubSectionWrapper from "~/components/helpers/SubSectionWrapper.vue";
import localeMixin from "~/mixins/locale.js";

export default {
  name: "MediaSubSection",
  mixins: [localeMixin],
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
  components: {
    SubSectionWrapper,
  },
};
</script>
