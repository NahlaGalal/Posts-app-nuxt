<template>
  <PostDetails :post="post" />
</template>

<script setup>
definePageMeta({
  layout: "navbar"
})

useHead({
  title: "Post page"
})

const { params: { id } } = useRoute();

const { data: post } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}?_embed=comments&_expand=user`)
</script>