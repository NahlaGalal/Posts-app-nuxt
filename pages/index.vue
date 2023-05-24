<template>
  <PostsHeader v-model="search" />
  <Loading v-if="pending || loading" />
  <PostsCardsContainer v-else :posts="posts.posts" :isLoadMore="isLoadMore" @loadMore="loadMore" />
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts?_expand=user&_limit=20"

const { data, pending } = await useLazyFetch(baseUrl)

let page = ref(1);
let search = ref('');
let loading = ref(false);
let isLoadMore = ref(true);
let posts = reactive({ posts: [] });

posts.posts = data;

const debounce = (func) => {
  let timer;

  return (val) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, [val])
    }, 300)
  }
}

const loadMore = async (val) => {
  const currentPage = val === undefined ? page.value : 0;
  const currentVal = val === undefined ? search.value : val;

  loading.value = true;

  try {
    const { data } = await axios.get(`${baseUrl}&_page=${currentPage + 1}&q=${currentVal || ""}`)

    loading.value = false;
    page.value = currentPage + 1;
    isLoadMore.value = data.length === 20;

    if (val === undefined) posts.posts.push(...data);
    else posts.posts = data;
  } catch (e) {
    loading.value = false;
    console.log(e)
  }
}

watch(search, debounce(async () => await loadMore(search.value)));

</script>