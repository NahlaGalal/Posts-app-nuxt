<template>
  <Loading v-if="pending" />
  <div v-else>
    <User :user="user" />
    <PostsCardsContainer :posts="user.posts.map(post => ({ ...post, user }))" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "navbar"
})

useHead({
  title: "User page"
})

const { params: { id } } = useRoute();

const { data: user, pending } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`)
</script>