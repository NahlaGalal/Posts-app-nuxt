<template>
  <section class="Comments">
    <h2 data-test="comments-header" class="Comments__header">Top Comments ({{ commentsNum }})</h2>

    <!-- Add comment -->
    <slot name="add-comment" />

    <!-- List all comments -->
    <div class="Comments__container">
      <slot name="comments-list" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  commentsNum: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="scss" scoped>
.Comments {
  padding-top: 24px;
  margin-top: 40px;
  border-top: var(--el-border);

  &__header {
    font-size: 24px;
    font-weight: 600;
    color: var(--el-color-black);
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>