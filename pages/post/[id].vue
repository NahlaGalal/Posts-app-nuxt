<template>
  <PostDetails :post="post" :addCommentForm="addCommentForm" :addComment="onAddCommentHandler" />
</template>

<script setup>
import { reactive } from "vue"

definePageMeta({
  layout: "navbar"
})

useHead({
  title: "Post page"
})

const addCommentForm = reactive({
  name: "",
  email: "",
  comment: "",
})

const { params: { id } } = useRoute();

const { data: post } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}?_embed=comments&_expand=user`)

const onAddCommentHandler = async (data) => {
  console.log(data);
}
</script>