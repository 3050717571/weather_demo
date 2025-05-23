<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    router
    :collapse="isCollapse"
  >
    <el-menu-item index="/">
      <el-icon><Sunny /></el-icon>
      <template #title>天气首页</template>
    </el-menu-item>
    <el-menu-item index="/map">
      <el-icon><Location /></el-icon>
      <template #title>地图查询</template>
    </el-menu-item>
    <el-menu-item index="/ai">
      <el-icon><Location /></el-icon>
      <template #title>ai</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import {ref} from "vue"
import {
  Sunny,
  Location
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
</style>
