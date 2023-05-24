<template>
  <section class="custom-container User">
    <div class="User__container">
      <!-- User avatar -->
      <span data-test="user-avatar" class="User__container__avatar">
        {{ user.name[0].toLocaleUpperCase() }}
      </span>

      <!-- User name -->
      <h2 data-test="user-name" class="User__container__name">{{ user.name }}</h2>
      <p data-test="user-username" class="User__container__username">@{{ user.username }}</p>

      <div class="User__container__data">
        <!-- User phone -->
        <p data-test="user-phone" class="User__container__data__item">
          <el-icon>
            <PhoneFilled />
          </el-icon>
          {{ user.phone }}
        </p>

        <!-- User email -->
        <p data-test="user-email" class="User__container__data__item">
          <el-icon>
            <Message />
          </el-icon>
          {{ user.email }}
        </p>

        <!-- User website -->
        <p data-test="user-website" class="User__container__data__item">
          <el-icon>
            <ChromeFilled />
          </el-icon>
          {{ user.website }}
        </p>
      </div>

      <div class="User__container__work">
        <h3 data-test="work-title" class="User__container__work__title">Work</h3>

        <!-- User company -->
        <p data-test="user-company" class="User__container__work__company">
          {{ user.company.bs }} @ {{ user.company.name }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Message, PhoneFilled, ChromeFilled } from "@element-plus/icons-vue"

defineProps({
  user: {
    type: Object,
    required: true,
  }
})
</script>

<style lang="scss">
.User {
  position: relative;
  margin-bottom: 64px;
  margin-top: 112px;

  &__container {
    background-color: var(--el-color-info);
    border-radius: 12px;
    border: var(--el-border);
    text-align: center;
    padding: 16px;
    color: var(--el-color-black);

    &__avatar {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 96px;
      height: 96px;
      border-radius: var(--el-border-radius-circle);
      background-color: var(--el-color-primary);
      color: var(--el-color-white);
      font-weight: 700;
      font-size: 20px;
      top: -48px;
      left: 50%;
      transform: translateX(-50%);
    }

    &__name {
      margin-top: 48px;
      font-size: 24px;
      font-weight: 600;
      color: var(--el-color-primary);
    }

    &__username {
      font-size: 14px;
      font-weight: 500;
      padding: 4px 12px;
      color: var(--el-color-success);
      background-color: var(--el-color-info);
      mix-blend-mode: multiply;
      border-radius: 16px;
      width: max-content;
      margin: auto;
    }

    &__data {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 16px;
      margin: 24px 0;

      &__item {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }

    &__work {
      border-top: var(--el-border);
      padding-top: 16px;

      &__title {
        font-size: 14px;
        color: var(--el-text-color-primary);
      }

      &__company {
        font-weight: 500;
        margin-top: 4px;
      }
    }
  }
}
</style>