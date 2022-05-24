<template>
  <div>
    <div class="sm:px-20 px-5 mt-16 grid grid-cols-2 lg:grid-cols-5 gap-7">
      <spinner-loading v-if="loading"></spinner-loading>
      <div v-for="vg in games" :key="vg.id" :class="loading ? 'hidden' : 'visible'" class="animate-[fadeIn_0.5s_ease-in-out] border-[#26282a] bg-[#26282a] relative rounded-3xl slide-covers text-center flex justify-center cursor-pointer h-[17.35rem] sm:h-[25.85rem] lg:h-[13.34rem] xl:h-[50vh]" @click="openModal(vg.id)">
        <img v-if="vg.cover" :key="games" @load="incrementLoadedGames" class="rounded-3xl img-cover" :src="vg.cover.url.replace('t_thumb', 't_720p')" :alt="vg.name"/>
        <span v-if="vg.cover" class="self-center img-name absolute z-10 hidden">{{ vg.name }}</span>
        <p v-else class="img-cover flex justify-center items-center">{{ vg.name }}</p>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-600 bg-[#26282a] text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Previous</span>
          <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
        </a>
        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
        <a href="#" aria-current="page" class="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </a>
        <a href="#" class="bg-[#26282a] border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </a>
        <a href="#" class="bg-[#26282a] border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 3 </a>
        <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-[#26282a] text-sm font-medium text-gray-700"> ... </span>
        <a href="#" class="bg-[#26282a] border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"> 8 </a>
        <a href="#" class="bg-[#26282a] border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 9 </a>
        <a href="#" class="bg-[#26282a] border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 10 </a>
        <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-[#26282a] text-sm font-medium text-gray-500 hover:bg-gray-50">
          <span class="sr-only">Next</span>
          <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
        </a>
      </nav>
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
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid'

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