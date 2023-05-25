<template>
  <Loading v-if="pending && post.post" />
  <PostDetails v-else :post="post.post" v-model="addCommentForm" :addComment="onAddCommentHandler"
    :handleSuccessFlag="handleSuccessFlag" />
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

const { data, pending } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}?_embed=comments&_expand=user`)
let post = reactive({ post: undefined });
let handleSuccessFlag = ref(false);

post.post = data;

const onAddCommentHandler = async (formEl) => {
  try {
    const isValid = await formEl.validate();
    if (isValid) {
      post.post.comments = [...post.post.comments, {
        postId: post.post.id,
        id: post.post.comments.length + 1,
        name: addCommentForm.name,
        email: addCommentForm.email,
        body: addCommentForm.comment
      }];

      formEl.resetFields();
      handleSuccessFlag.value = !handleSuccessFlag.value;
    }
  } catch (err) {
    console.log(err);
  }
}
</script>