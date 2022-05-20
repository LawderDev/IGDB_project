<template>
  <div class="sm:px-20 px-5 mt-16 grid grid-cols-5 gap-7">
    <spinner-loading v-if="loading"></spinner-loading>
    <div v-else v-for="vg in games" :key="vg.id" class="slide-covers text-center flex justify-center cursor-pointer" @click="openModal(vg.id)">
      <img v-if="vg.cover"  class="rounded-3xl img-cover"  :src="vg.cover.url.replace('t_thumb', 't_720p')" :alt="vg.name"/>
      <img v-else src="" :alt="vg.name">
      <span class="self-center img-name absolute z-10 hidden">{{ vg.name }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useIgdbServices from "@/services/igdb.services";
import {onMounted, ref, watch} from "vue";
import router from "@/router";
import {store} from "@/store";
import SpinnerLoading from "@/components/SpinnerLoading.vue"
const { getAllGames } = useIgdbServices()

const games = ref({})
const loading = ref(false)
onMounted(() => loadGames())

const loadGames = () => {
  loading.value = true
  if(router.currentRoute.value.query.search !== ""){
    console.log(router.currentRoute.value.query.search)
    getAllGames(router.currentRoute.value.query.search as string).then((res) =>{
      games.value = res.data
      loading.value = false
    })
  }else{
    console.log("enter")
    getAllGames("").then((res) =>{
      games.value = res.data
      loading.value = false
    })
  }
}

watch(() => router.currentRoute.value.query.search, newSearch => loadGames())

const openModal = (id:number) =>{
  store.state.selectedGame = id
  store.state.openGameModal = true
}
</script>

<style scoped lang="scss">
.slide-covers:hover{
  .img-cover{
    @apply
    transition-[opacity]
    duration-300
    opacity-30
  }
  .img-name{
    @apply block
  }
}

</style>