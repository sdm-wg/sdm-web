<template>
  <Layout @receive-toggle-dark="toggleDark" :isDark="isDark">
    <div class="w-full container mx-auto py-4">
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
    title
  }
}
</page-query>

<script>
import colorSchemeMixin from "~/mixins/colorScheme.js";

export default {
  name: "Post",
  metaInfo: function () {
    return {
      title: this.$page.post.title,
    };
  },
  mixins: [colorSchemeMixin],
};
</script>
