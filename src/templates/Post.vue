<template>
  <Layout>
    <article class="prose">
      <VueRemarkContent />
    </article>
  </Layout>
</template>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
  }
}
</page-query>
