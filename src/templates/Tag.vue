<template>
  <Layout>
    <h1>{{ $page.tag.id }}</h1>
    <ul>
      <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
        <g-link :to="edge.node.path">
          {{ edge.node.title }}
        </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  tag(id: $id) {
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
