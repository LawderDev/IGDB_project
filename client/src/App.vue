<script setup lang="ts">
import SlideMenu from '@/components/SlideMenu.vue'
import UserGreeting from '@/components/UserGreeting.vue'
</script>

<template>
  <div class="text-slate-300">
    <div class="ml-5 flex gap-x-14 mt-5 items-center">
      <slide-menu></slide-menu>
      <user-greeting></user-greeting>
    </div>
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
}

html{
  background: #303234;
}

</style>