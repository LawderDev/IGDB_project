<script setup lang="ts">
import useIgdbServices from '../services/igdb.services'
import {onMounted, ref} from "vue";
const {getAll} = useIgdbServices()
const listTopVideoGames = ['Test', 'Test']
onMounted(() => {
  getAll().then((res) => console.log(res))
})
</script>

<template>
  <h2 class="text-[20px] mt-5 mb-5 ml-5">top du moment</h2>
  <div class="flex flex-auto justify-center ml-5 gap-x-16">
    <div class="text-center" v-for="vg in listTopVideoGames">
      {{ vg }}
    </div>
  </div>
</template>

<style scoped>

</style>