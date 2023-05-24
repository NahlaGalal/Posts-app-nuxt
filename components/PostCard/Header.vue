
<template>
  <!-- User avatar with a first letter of his name -->
  <span class="el-card__header__avatar" data-test="user-avatar">
    {{ user.name[0].toLocaleUpperCase() }}
  </span>

  <!-- User name -->
  <nuxt-link :to="'/user/' + user.id" data-test="user-name" class="el-card__header__name">{{ user.name }}</nuxt-link>

  <!-- Link to post -->
  <nuxt-link :to="'/post/' + postId" data-test="post-link" class="el-card__header__link">
    <el-icon size="16">
      <TopRight />
    </el-icon>
  </nuxt-link>
</template>

<script setup>
import { TopRight } from '@element-plus/icons-vue'

defineProps({
  postId: {
    type: Number,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  }
})
</script>

<style lang="scss">
.el-card {
  .el-card__header {
    display: flex;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    border: 0;

    &__avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: var(--el-border-radius-circle);
      background: var(--el-color-primary);
      color: var(--el-color-white);
      font-weight: 700;
      font-size: var(--el-font-size-extra-large);
    }

    &__name {
      font-size: var(--el-font-size-base);
      color: var(--el-color-black);
      font-weight: 500;
      text-decoration: none;
    }

    &__link {
      color: var(--el-color-black);
      margin-left: auto;
      text-decoration: none;
    }
  }
}
</style>