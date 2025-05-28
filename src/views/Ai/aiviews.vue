<template>
  <el-button @click="handleClick">问AI</el-button>
  <Aiview @countaaa="addCount" @remove="removecount" />
  <div>数字： <CountTo :endVal="count" :duration="2000" /></div>
</template>

<script setup lang="ts">
import { chatWithQianfan } from '@/api/ai'
import Aiview from '@/views/Ai/aiview.vue'
import { ref, watch, onMounted } from 'vue'
import { CountTo } from 'vue3-count-to'

const count = ref<number>(100)

watch(count, (newcount) => {
  localStorage.setItem('count', newcount.toString())
})
function handleClick() {
  chatWithQianfan()
}

const addCount = (data) => {
  count.value += data
}

const removecount = () => {
  localStorage.removeItem('count')
}
onMounted(() => {
  const saved = localStorage.getItem('count')
  console.log('localStorage取到的count:', saved)
  if (saved !== null) count.value = Number(saved)
})
</script>
