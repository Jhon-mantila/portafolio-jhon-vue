<template>
  <div class="app-layout">
    <AppHeader />
      <main>
        <HomeView />
      </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

import HomeView from './views/HomeView.vue'
</script>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
:global(body) {
  margin: 0;
  background: #0c0e12;
}
main {
  flex: 1;
}
</style>
