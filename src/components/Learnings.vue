<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="mt-4">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.nav-link.active {
  background-color: #007bff;
  color: white;
}
</style>
