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
      <div class="lg:flex sm:gap-x-8 absolute left-[83vw] hidden">
        <secondary-button>Connexion</secondary-button>
        <primary-button>Inscription</primary-button>
      </div>

    </div>
      <search-bar class="sm:mt-16 mt-10"></search-bar>
    <router-view />
    <svg  class="invisible absolute">
      <defs>
        <linearGradient id="gradient-circle">
          <stop offset="0%" stop-color="#F18303" />
          <stop offset="100%" stop-color="#F94409" />
        </linearGradient>
      </defs>
    </svg>
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

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #5c5c5c #303234;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 13px;
}

*::-webkit-scrollbar-track {
  background: #303234;
}

*::-webkit-scrollbar-thumb {
  background-color: #5c5c5c;
  border-radius: 12px;
  border: 3px solid #303234;
}

</style>