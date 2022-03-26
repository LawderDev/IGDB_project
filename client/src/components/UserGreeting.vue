<script setup lang="ts">
import { useStore } from "vuex"
const store = useStore()
</script>

<template>
  <div class="flex items-center gap-x-3">
    <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
    <h1 class="text-xl">bonjour {{ store.state.user.name }} !</h1>
  </div>
</template>

<style scoped>

</style>