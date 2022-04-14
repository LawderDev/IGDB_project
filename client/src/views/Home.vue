<script setup lang="ts">
import useIgdbServices from '../services/igdb.services'
import SlideGames from '@/components/SlideGames.vue'
import { onMounted, ref } from "vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const { getMostRatingGames, getLastReleasedGames } = useIgdbServices()
let listTopVideoGames = ref([{}])
let listLastReleasedVideoGames = ref([{}])
onMounted(() => {
  getMostRatingGames(10).then((res) => listTopVideoGames.value = res.data)
  getLastReleasedGames(10).then((res) => listLastReleasedVideoGames.value = res.data)
})
</script>

<template>
  <slide-games :title="'top du moment'" :list-games="listTopVideoGames" :num-slide="0"></slide-games>
  <slide-games :title="'nouvelles sorties'" :list-games="listLastReleasedVideoGames" :id-slide="1"></slide-games>
</template>

<style scoped>

</style>