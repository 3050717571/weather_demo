<template>
  <button @click="handleClick">问AI</button>
</template>

<script setup lang="ts">
import { chatWithQianfan } from '@/api/ai'

function handleClick() {
  chatWithQianfan()
}
</script>
