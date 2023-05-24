<template>
  <main class="Details custom-container">
    <article>
      <!-- Post title -->
      <h1 data-test="post-title" class="Details__title">{{ post.title }}</h1>

      <!-- Post body -->
      <p data-test="post-body" class="Details__body">{{ post.body }}</p>

      <!-- Author data -->
      <section class="Details__author">
        <!-- Author avatar -->
        <span data-test="author-avatar" class="Details__author__avatar">{{ post.user.name[0].toLocaleUpperCase() }}</span>

        <div>
          <!-- Author name -->
          <nuxt-link :to="'/user/' + post.user.id" data-test="author-name" class="Details__author__name">{{ post.user.name }}</nuxt-link>

          <!-- Author company -->
          <p data-test="author-company" class="Details__author__company">
            <el-icon><LocationFilled /></el-icon>
            {{ post.user.company.name }}
          </p>

          <!-- Author phone -->
          <p data-test="author-phone" class="Details__author__phone">
            <el-icon><PhoneFilled /></el-icon>
            {{ post.user.phone }}
          </p>
        </div>
      </section>
    </article>
  </main>
</template>

<script setup>
import { LocationFilled, PhoneFilled } from "@element-plus/icons-vue"

defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss">
.Details {
  margin: 112px 0;

  &__title {
    font-size: 30px;
    font-weight: 600;
    color: var(--el-color-black);
    margin-bottom: 24px;

    @media screen and (min-width: 767px) {
      font-size: 48px;
      line-height: 60px;
    }
  }

  &__body {
    font-size: 20px;
    color: var(--el-text-color-primary);
    margin: auto;

    @media screen and (min-width: 767px) {
      width: 75%
    }
  }
  
  &__author {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    border-top: 1px solid var(--el-text-color-primary);
    margin: 48px auto 0;
    padding-top: 24px;
    
    @media screen and (min-width: 767px) {
      width: 75%
    }

    &__avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: var(--el-color-primary);
      color: var(--el-color-white);
      font-weight: 700;
      font-size: 20px;
    }

    &__name {
      font-size: 18px;
      font-weight: 600;
      color: var(--el-color-black);
      text-decoration: none;
    }

    &__company, &__phone {
      color: var(--el-color-black);
      display: flex;
      gap: 4px;
      align-items: center;
    }

    &__phone {
      color: var(--el-text-color-primary);
    }
  }
}
</style>