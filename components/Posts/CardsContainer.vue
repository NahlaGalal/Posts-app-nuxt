<template>
  <main class="custom-container Cards-container">
    <!-- First two blogs in one row -->
    <el-row :gutter="32" class="first-blogs">
      <el-col :xs="24" :sm="12" tag="section">
        <PostCard />
      </el-col>

      <el-col :xs="24" :sm="12" tag="section">
        <PostCard />
      </el-col>
    </el-row>

    <!-- Rest of blogs -->
    <el-row :gutter="32">
      <el-col :xs="24" :sm="12" :lg="8" tag="section">
        <PostCard />
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8" tag="section">
        <PostCard />
      </el-col>
      <el-col :xs="24" :sm="12" :lg="8" tag="section">
        <PostCard />
      </el-col>
    </el-row>

    <!-- Load more -->
    <el-button type="success">Load more</el-button>
  </main>
</template>

<script setup>
</script>

<style lang="scss">
.Cards-container {
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