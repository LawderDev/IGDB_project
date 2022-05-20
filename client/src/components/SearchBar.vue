<template>
  <div class="flex justify-center items-center w-full h-12">
    <input id="inputSearch"
            class="sm:w-[50vw] h-full w-[90vw] bg-blue-200 rounded-full bg-[#C4C4C4] text-[#787878] text-[20px] pl-5"
           type="text"
           placeholder="Sélectionnez un jeu ..."
           v-model="text"
           @keyup="eventChange"
    >
    <button class="absolute sm:left-[72.5vw] left-[86vw] w-12 h-12 bg-gradient-to-r from-[#F18303] to-[#F94409] rounded-full text-black" @click="eventChange">R</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import router from "@/router";
const text = ref("");

let timer: number | undefined;
const intervalTyping = 550;

watch(() => (router.currentRoute.value.name), () => {
  text.value = router.currentRoute.value.query.search as string
})

const changeRoute = () => {
  router.push({ name: 'searchGame', query: { search: text.value ? text.value : "" } })
}
const eventChange = () => {
  clearTimeout(timer)
  timer = setTimeout(changeRoute, intervalTyping)
}

</script>

<style scoped>

</style>