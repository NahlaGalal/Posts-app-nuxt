<template>
  <div>
  </div>
</template>

<style lang="scss" scoped>
div {
  position: relative;
  width: 80px;
  height: 80px;
  border: 14px solid var(--el-color-primary);
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-radius: var(--el-border-radius-circle);
  z-index: 50;
  animation: spin 1s linear infinite;
  margin: auto;
  margin-top: 96px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>