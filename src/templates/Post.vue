<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <div class="w-full container mx-auto px-4 py-8">
      <article
        class="prose lg:prose-xl max-w-none"
        :class="{ 'prose-dark': isDark }"
      >
        <VueRemarkContent />
      </article>
    </div>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title {
      ja
      en
    }
  }
}
</page-query>

<script>
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
};
</script>
