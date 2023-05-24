<template>
  <div class="Comment" data-test="comment">
    <!-- Commenter avatar -->
    <span class="Comment__avatar" data-test="commenter-avatar">{{ comment.name[0].toLocaleUpperCase() }}</span>

    <div class="Comment__container">
      <!-- Commenter name -->
      <p data-test="commenter-name" class="Comment__container__name">{{ comment.name }}</p>

      <!-- Commenter email -->
      <p data-test="commenter-email" class="Comment__container__email">{{ comment.email }}</p>

      <!-- Comment body -->
      <p data-test="comment-body">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  comment: {
    type: Object,
    required: true,
  }
})
</script>

<style lang="scss" scoped>
.Comment {
  display: flex;
  gap: 16px;

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-top: 16px;
    border-radius: var(--el-border-radius-circle);
    background-color: var(--el-color-primary);
    color: var(--el-color-white);
    font-weight: 700;
    font-size: 20px;
  }

  &__container {
    border: var(--el-border);
    border-radius: var(--el-border-radius-base);
    flex: 1;
    padding: 16px;

    &__name {
      color: var(--el-color-success);
      font-size: 18px;
    }

    &__email {
      color: var(--el-text-color-primary);
      font-size: 14px;
      margin-bottom: 16px;
    }
  }
}
</style>