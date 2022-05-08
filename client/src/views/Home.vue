<template>
  <game-modal :open="openModal" :id="selectedGameId" @closeModal="openModal = false"></game-modal>
  <slide-games :title="'top du moment'" :list-games="listTopVideoGames" :id-slide="0" @selectedGame="selectGame"></slide-games>
  <slide-games :title="'nouvelles sorties'" :list-games="listLastReleasedVideoGames" :id-slide="1" @selectedGame="selectGame"></slide-games>
</template>

<script setup lang="ts">
import useIgdbServices from '../services/igdb.services'
import SlideGames from '@/components/SlideGames.vue'
import { onMounted, ref } from "vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import GameModal from "@/components/GameModal.vue";
const { getMostRatingGames, getLastReleasedGames, getHypesGames } = useIgdbServices()
let listTopVideoGames = ref([{}])
let listLastReleasedVideoGames = ref([{}])
let listHypesVideoGames = ref([{}])
let openModal = ref(false)
let selectedGameId = ref(-1)
onMounted(() => {
  getMostRatingGames(10).then((res) => listTopVideoGames.value = res.data)
  getLastReleasedGames(10).then((res) => {
    let tab = []
    //console.log(res.data)
    res.data.forEach((d) => {
      tab.push(d.game)
    })
    //console.log(tab)
    listLastReleasedVideoGames.value =tab
  })
  getHypesGames(10).then((res) => listHypesVideoGames.value = res.data)
})

const selectGame = (id: number) => {
  selectedGameId.value = id
  openModal.value = true
}
</script>

<style scoped>

</style>