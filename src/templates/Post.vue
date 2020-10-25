<template>
  <Layout
    @receive-toggle-dark="toggleDark"
    :isDark="isDark"
    :coverImage="$page.post.image"
  >
    <SectionWrapper :isDark="isDark" :isEven="false" sectionId="post">
      <div class="w-full p-4">
        <div class="flex flex-wrap justify-between py-3">
          <!-- Date -->
          <div
            class="w-full sm:w-auto py-1 text-base lg:text-lg transition-set"
            :class="{
              'text-gray-100': isDark,
              'text-gray-900': !isDark,
            }"
          >
            <font-awesome
              class="mr-1"
              :icon="['fas', 'calendar-alt']"
              fixed-width
            />
            <flex-link
              class="inline-block"
              :class="{
                'hover:text-blue-500': isDark,
                'hover:text-orange-500': !isDark,
              }"
              :to="$page.post.archives[1].path"
            >
              {{ $page.post.date }}
            </flex-link>
          </div>

          <!-- Tags -->
          <div
            class="py-1 text-base lg:text-lg transition-set"
            :class="{
              'text-gray-100': isDark,
              'text-gray-900': !isDark,
            }"
          >
            <font-awesome class="mr-1" :icon="['fas', 'tag']" fixed-width />

            <span v-for="tag in $page.post.tags" :key="tag.id">
              <flex-link
                class="inline-block mr-2"
                :class="{
                  'hover:text-blue-500': isDark,
                  'hover:text-orange-500': !isDark,
                }"
                :to="tag.path"
              >
                {{ tag.id }}
              </flex-link>
            </span>
          </div>
        </div>

        <article
          class="prose lg:prose-xl max-w-none py-2"
          :class="{ 'prose-dark': isDark }"
        >
          <VueRemarkContent />
        </article>
      </div>
    </SectionWrapper>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    path
    title {
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
</page-query>

<script>
import SectionWrapper from "~/components/helpers/SectionWrapper.vue";

import localeMixin from "~/mixins/locale.js";
import colorSchemeMixin from "~/mixins/colorScheme.js";

export default {
  name: "Post",
  metaInfo: function () {
    return {
      title: this.$page.post.title[this.language],
    };
  },
  mixins: [localeMixin, colorSchemeMixin],
  components: {
    SectionWrapper,
  },
};
</script>
