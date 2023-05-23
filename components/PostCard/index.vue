<template>
  <el-card class="Postcard" data-test="post-card">
    <template #header>
      <PostCardHeader />
    </template>

    <!-- Post name -->
    <nuxt-link to="/post/1" data-test="post-title" class="Postcard__title strict-lines strict-lines--one">Title Title
      Title Title Title </nuxt-link>

    <!-- Post small description -->
    <p data-test="post-body" class="Postcard__body strict-lines">Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy
      Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy Bosy </p>
  </el-card>
</template>

<script setup>
</script>

<style lang="scss">
.Postcard {
  padding: 24px 24px 32px;
  border: 0;
  border-radius: 0;

  .el-card__body {
    padding: 0;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    color: var(--el-color-black);
    margin: 12px 0;
    text-decoration: none;
  }

  &__body {
    color: var(--el-text-color-primary);
  }
}
</style>