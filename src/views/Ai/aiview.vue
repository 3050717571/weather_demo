<template>
  <el-button @click="handleClickremove">清除数字缓存</el-button>
  <el-button @click="submitClick"> 数字加 </el-button>
  <div>{{ count }}</div>
</template>
<script setup lang="ts">
const emit = defineEmits(['countaaa', 'remove'])

const submitClick = () => {
  emit('countaaa', 4)
}
function handleClickremove() {
  emit('remove')
}
</script>
