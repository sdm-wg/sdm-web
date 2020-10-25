<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <SectionWrapper :isDark="isDark" :isEven="true" sectionId="posts">
      <template v-slot:heading>{{ $t("post.heading") }}</template>
      <!-- Media Info -->
      <div class="flex flex-col w-full">
        <!-- Search -->
        <div class="flex flex-row-reverse w-full px-4 pb-4">
          <input
            v-model="searchText"
            class="w-full md:w-64 p-1 border border-gray-400 rounded-lg appearance-none focus:outline-none active:outline-none text-gray-900"
            :class="{
              'focus:border-blue-500 active:border-blue-500 bg-gray-100': isDark,
              'focus:border-orange-500 active:border-orange-500': !isDark,
            }"
            type="text"
            placeholder="Search"
          />
        </div>

        <!-- Post Cards -->
        <div class="flex flex-row flex-wrap">
          <PostCard
            v-for="post in filteredPost"
            :key="post.node.id"
            :isDark="isDark"
            :post="post"
          />
        </div>

        <!-- Entry Count -->
        <div class="px-4 pt-4">
          <span
            class="text-base transition-set"
            :class="{
              'text-gray-100': isDark,
              'text-gray-900': !isDark,
            }"
          >
            Showing {{ filteredPostLength }} out of {{ postLength }} entries
          </span>
        </div>
      </div>
    </SectionWrapper>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        path
        title {
          ja
          en
        }
        summary {
          ja
          en
        }
        tags {
          id
          path
        }
        date(format: "YYYY-MM-DD")
        archives {
          id
          path
        }
        image
      }
    }
  }
}
</page-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";
import PostCard from "~/components/helpers/PostCard.vue";

import localeMixin from "~/mixins/locale.js";
import colorSchemeMixin from "~/mixins/colorScheme.js";

export default {
  name: "Posts",
  metaInfo: function () {
    return {
      title: "Posts",
    };
  },
  mixins: [localeMixin, colorSchemeMixin],
  data: () => {
    return {
      searchText: "",
    };
  },
  computed: {
    filteredPost: function () {
      const keyword = this.searchText.toLowerCase();
      return this.$page.posts.edges.filter((post) => {
        const { title, summary, tags, date } = post.node;
        const joinedTag = tags.map((node) => node.id).join(" ");
        return (
          title[this.language].toLowerCase().includes(keyword) ||
          summary[this.language].toLowerCase().includes(keyword) ||
          joinedTag.toLowerCase().includes(keyword) ||
          date.toLowerCase().includes(keyword)
        );
      });
    },
    postLength: function () {
      return this.$page.posts.edges.length;
    },
    filteredPostLength: function () {
      return this.filteredPost.length;
    },
  },
  components: {
    SectionWrapper,
    PostCard,
  },
};
</script>
