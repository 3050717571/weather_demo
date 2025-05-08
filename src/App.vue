<template>
    <div style="display: flex;" >
    <Sidebar/>
    <div style="flex: 1;">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Sidebar from '@/views/layout/Sidebar.vue'
</script>
