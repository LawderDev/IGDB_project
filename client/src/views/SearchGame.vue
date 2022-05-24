<template>
  <div class="sm:px-20 px-5 mt-16 grid grid-cols-2 lg:grid-cols-5 gap-7">
    <spinner-loading v-if="loading"></spinner-loading>
    <div v-for="vg in games" :key="vg.id" :class="loading ? 'hidden' : 'visible'" class="animate-[fadeIn_0.5s_ease-in-out] border-[#26282a] bg-[#26282a] relative rounded-3xl slide-covers text-center flex justify-center cursor-pointer h-[17.35rem] sm:h-[25.85rem] lg:h-[13.34rem] xl:h-[50vh]" @click="openModal(vg.id)">
      <img v-if="vg.cover" :key="games" @load="incrementLoadedGames" class="rounded-3xl img-cover" :src="vg.cover.url.replace('t_thumb', 't_720p')" :alt="vg.name"/>
      <span v-if="vg.cover" class="self-center img-name absolute z-10 hidden">{{ vg.name }}</span>
      <p v-else class="img-cover flex justify-center items-center">{{ vg.name }}</p>
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
const gamesToLoad = ref([])
const nbGamesLoaded = ref(0)

onMounted(() => loadGames())

const getGames = (search:string) => {
  getAllGames(search).then((res) =>{
    games.value = res.data
    gamesToLoad.value = Object.values(res.data).filter((g) => g.cover)
    if(gamesToLoad.value.length === 0)
      loading.value = false
    nbGamesLoaded.value = 0
  })
}
const loadGames = () => {
  loading.value = true
  const search = router.currentRoute.value.query.search
  getGames(search as string)
}

const incrementLoadedGames = () => {
  nbGamesLoaded.value++
  if(nbGamesLoaded.value >= gamesToLoad.value.length)
      loading.value = false
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