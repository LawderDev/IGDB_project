<script setup lang="ts">
import SlideMenu from '@/components/SlideMenu.vue'
import UserGreeting from '@/components/UserGreeting.vue'
import SearchBar from '@/components/SearchBar.vue'
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
import SecondaryButton from "@/components/buttons/SecondaryButton.vue";
</script>

<template>
  <div class="text-slate-300">
    <div class="sm:gap-x-0 flex gap-x-12 mt-5 items-center">
      <slide-menu class="absolute z-10 top-0 pl-5 pt-7"></slide-menu>
      <user-greeting class="sm:mx-auto ml-[25vw]"></user-greeting>
      <div class="lg:flex sm:gap-x-8 absolute right-8 hidden">
        <secondary-button>Connexion</secondary-button>
        <primary-button>Inscription</primary-button>
      </div>

    </div>
      <search-bar class="sm:mt-16 mt-10"></search-bar>
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
  margin:0;
}

</style>