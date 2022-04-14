<script setup lang="ts">
import useIgdbServices from '../services/igdb.services'
import SlideGames from '@/components/SlideGames.vue'
import { onMounted, ref } from "vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const { getMostRatingGames, getLastReleasedGames, getHypesGames } = useIgdbServices()
let listTopVideoGames = ref([{}])
let listLastReleasedVideoGames = ref([{}])
let listHypesVideoGames = ref([{}])
onMounted(() => {
  getMostRatingGames(10).then((res) => listTopVideoGames.value = res.data)
  getLastReleasedGames(10).then((res) => {
    let tab = []
    console.log(res.data)
    res.data.forEach((d) => {
      tab.push(d.game)
    })
    //console.log(tab)
    listLastReleasedVideoGames.value =tab
  })
  getHypesGames(10).then((res) => listHypesVideoGames.value = res.data)
})
</script>

<template>
  <slide-games :title="'top du moment'" :list-games="listTopVideoGames" :num-slide="0"></slide-games>
  <slide-games :title="'nouvelles sorties'" :list-games="listLastReleasedVideoGames" :id-slide="1"></slide-games>
  <slide-games :title="'les plus attendus'" :list-games="listHypesVideoGames" :id-slide="2"></slide-games>
</template>

<style scoped>

</style>