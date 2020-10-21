<template>
  <Layout>
    <h1>{{ $page.archive.id }}</h1>
    <ul>
      <li v-for="edge in $page.archive.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  archive(id: $id) {
    id
    belongsTo {
      edges {
        node {
          ... on Post {
            id
            title {
              ja
              en
            }
            path
          }
        }
      }
    }
  }
}
</page-query>
