<template>
  <el-header class="custom-container Header">
    <p data-test="blog-tag" class="Header__tag">Our blog</p>

    <!-- Heading of posts page -->
    <h1 data-test="main-header" class="Header__heading">
      Resources and Insights
    </h1>
    <h2 data-test="sub-header" class="Header__heading--sub">
      The latest industry news, interviews, technologies, and resources.
    </h2>

    <!-- Search input  -->
    <div class="Header__search">
      <el-input type="search" placeholder="Search" name="search" data-test="search-input" :value="modelValue"
        @input="$emit('update:modelValue', $event)" class="Header__search__input" :prefix-icon="Search" />
    </div>

    <!-- Span for background only  -->
    <span aria-hidden class="Header__background">
      <img src="../../assets/images/bg-pattern.svg" alt="background pattern" class="Header__background__img" />
    </span>
  </el-header>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue'

defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.Header {
  position: relative;
  height: auto;
  padding-top: 96px;
  padding-bottom: 96px;
  background-color: var(--el-color-info);

  &__tag {
    font-size: 14px;
    font-weight: 500;
    padding: 4px 12px;
    color: var(--el-color-primary);
    background-color: var(--el-color-info);
    mix-blend-mode: multiply;
    border-radius: 16px;
    width: max-content;
    margin: 0 auto;
  }

  &__heading {
    font-size: 36px;
    line-height: 60px;
    font-weight: 600;
    color: var(--el-color-primary);
    text-align: center;
    margin-top: 16px;
    margin-bottom: 24px;

    @media (min-width: 640px) {
      font-size: 48px;
    }

    &--sub {
      font-size: 20px;
      color: var(--el-color-success);
      text-align: center;
    }
  }

  &__search {
    position: relative;
    width: max-content;
    max-width: 100%;
    margin: 40px auto 0;

    &__input {
      .el-input {
        &__wrapper {
          border-radius: 8px;
          max-width: 100%;
          border: 0;
          box-shadow: none;

          @media (min-width: 640px) {
            max-width: 320px;
          }
        }

        &__inner {
          color: var(--el-text-color-primary);
          height: 48px;
        }

        &__icon,
        &__icon svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  &__background {
    position: absolute;
    left: 0;
    width: 100%;

    &__img {
      width: 100%;
    }
  }
}
</style>