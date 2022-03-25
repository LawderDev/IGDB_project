<script setup lang="ts">
</script>

<template>
  <div>
    <div class="p-3">
      <div class="mx-auto max-w-screen-lg flex items-center justify-center">
        <router-link to="/" class="mx-2 btn">Home</router-link>
        <router-link to="/all" class="mx-2 btn">All Quotes</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>