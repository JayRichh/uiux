<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Common/HeaderComponent.vue'
import Footer from './components/Common/FooterComponent.vue'
</script>

<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.container {
  padding-top: 60px;
}
</style>
