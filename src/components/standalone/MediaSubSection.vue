<template>
  <SubSectionWrapper :isDark="isDark" :sectionId="sectionId">
    <template v-slot:heading>{{ $t("news.media.heading") }}</template>

    <!-- Media Info -->
    <div class="flex flex-col w-full p-4">
      <!-- Search -->
      <div class="flex flex-row-reverse w-full pb-4">
        <input
          v-model="searchText"
          class="w-full md:w-64 p-1 border border-gray-400 rounded-lg appearance-none focus:outline-none active:outline-none text-gray-900"
          :class="{
            'focus:border-blue-500 active:border-blue-500 bg-gray-100': isDark,
            'focus:border-orange-500 active:border-orange-500': !isDark,
          }"
          type="text"
          placeholder="Search"
          autofocus
        />
      </div>

      <!-- Media Table -->
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
                  class="font-bold text-left text-base sm:text-lg uppercase tracking-wider transition-set"
                  :class="{
                    'text-gray-100': isDark,
                    'text-gray-900': !isDark,
                  }"
                >
                  <th class="p-3">Date</th>
                  <th class="p-3">Title</th>
                  <th class="p-3">Type</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-400">
                <tr
                  v-for="media in filteredMedia"
                  :key="media.node.id"
                  class="text-base transition-set"
                  :class="{
                    'text-gray-300': isDark,
                    'text-gray-700': !isDark,
                  }"
                >
                  <td class="p-3 whitespace-no-wrap">
                    {{ media.node.date }}
                  </td>
                  <td class="p-3">
                    <span>{{ media.node.title[language] }}</span>
                  </td>
                  <td class="p-3">
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

      <!-- Entry Count -->
      <div class="pt-4">
        <span
          class="text-base transition-set"
          :class="{
            'text-gray-100': isDark,
            'text-gray-900': !isDark,
          }"
        >
          Showing {{ filteredMediaLength }} out of {{ mediaLength }} entries
        </span>
      </div>
    </div>
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
  data: () => {
    return {
      searchText: "",
    };
  },
  computed: {
    filteredMedia: function () {
      const limit = 20;
      const keyword = this.searchText.toLowerCase();
      return this.$static.media.edges
        .filter((media) => {
          const { date, title, type } = media.node;
          return (
            date.toLowerCase().includes(keyword) ||
            title[this.language].toLowerCase().includes(keyword) ||
            type.toLowerCase().includes(keyword)
          );
        })
        .slice(0, limit);
    },
    mediaLength: function () {
      return this.$static.media.edges.length;
    },
    filteredMediaLength: function () {
      return this.filteredMedia.length;
    },
  },
  components: {
    SubSectionWrapper,
  },
};
</script>
