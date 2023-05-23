<template>
  <PostsHeader v-model="search" />
  <Loading v-if="pending" />
  <PostsCardsContainer v-else :posts="posts" />
</template>

<script setup>
import { ref } from "vue";

const page = ref(1);
const search = ref('');

onUpdated(() => {
  
  console.log(search);
});

const { data: posts, pending } = await useFetch("https://jsonplaceholder.typicode.com/posts?_expand=user&_limit=20")
</script>