<template>
  <User :user="user" />
  <PostsCardsContainer :posts="user.posts.map(post => ({ ...post, user }))" />
</template>

<script setup>
definePageMeta({
  layout: "navbar"
})

useHead({
  title: "User page"
})

const { params: { id } } = useRoute();

const { data: user } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts`)
</script>