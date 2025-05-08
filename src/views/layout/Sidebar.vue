<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    router
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <template #title>天气首页</template>
    </el-menu-item>
    <el-menu-item index="/about">
      <el-icon><setting /></el-icon>
      <template #title>关于我们</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
</style>
