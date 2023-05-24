<template>
  <div>
    <header class="custom-container Navbar" data-test="navbar">
      <!-- This is a simple navbar -->
      <nav class="Navbar__nav">
        <nuxt-link to="/" data-test="logo" class="Navbar__nav__logo">Logo</nuxt-link>
      </nav>
    </header>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .Navbar {
    padding: 16px 0;
    background: var(--el-color-info);

    &__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      row-gap: 16px;

      &__logo {
        color: var(--el-color-primary);
        font-size: 24px;
        font-weight: 700;
        text-decoration: none;
      }
    }
  }
</style>