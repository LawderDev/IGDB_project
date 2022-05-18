<script setup lang="ts">
import { useStore } from "vuex"
import {ref} from "vue";
import UserModal from "@/components/UserModal.vue";
const store = useStore()

let openModal = ref(false)
</script>

<template>
  <div class="flex items-center gap-x-3">
    <button class="w-12 h-12 bg-gray-200 rounded-full" @click="openModal = true" ></button>
    <h1 class="sm:text-2xl text-xl">bonjour {{ store.state.user.name }} !</h1>
    <user-modal :open="openModal" @closeModal="openModal = false"></user-modal>
  </div>

</template>

<style scoped>

</style>