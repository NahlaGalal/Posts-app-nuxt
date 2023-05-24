<template>
  <main class="custom-container Cards-container">
    <!-- First two blogs in one row -->
    <el-row :gutter="32" class="first-blogs">
      <el-col :xs="24" :sm="12" tag="section" v-for="post in posts.slice(0, 2)" :key="post.id">
        <PostCard :post="post" />
      </el-col>
    </el-row>

    <!-- Rest of blogs -->
    <el-row :gutter="32">
      <el-col :xs="24" :sm="12" :lg="8" tag="section" v-for="post in posts.slice(2)" :key="post.id">
        <PostCard :post="post" />
      </el-col>
    </el-row>

    <!-- Load more -->
    <el-button type="success" @click="$emit('loadMore')" v-if="isLoadMore">Load more</el-button>
  </main>
</template>

<script setup>
defineProps({
  posts: {
    type: Array,
    default: [],
  },
  isLoadMore: {
    type: Boolean,
    default: false,
  }
})

defineEmits(['loadMore'])
</script>

<style lang="scss">
.Cards-container {
  margin-bottom: 112px;

  .el-row {
    row-gap: 48px;
  }

  .first-blogs {
    margin-bottom: 48px;
  }

  .el-button {
    display: block;
    width: max-content;
    padding: 10px 16px;
    font-size: 14px;
    line-height: initial;
    border-radius: 8px;
    margin: 40px auto 0;
    height: 40px;

    span {
      font-weight: 600;
    }
  }
}
</style>