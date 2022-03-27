<script setup lang="ts">
import useIgdbServices from '../services/igdb.services'
import {onMounted, Ref, ref, UnwrapRef} from "vue";
import SecondaryButton from "@/components/buttons/SecondaryButton.vue";
import { useSwiper, Swiper, SwiperSlide } from 'swiper/vue';
import { Controller } from 'swiper';

const controlledSwiper = ref(null);
const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper;
  controlledSwiper.value
};
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
const {getMostRatingGames} = useIgdbServices()
let listTopVideoGames = ref([{}])
onMounted(() => {
  getMostRatingGames(10).then((res) => listTopVideoGames.value = res.data)
})


</script>

<template>
  <div class="sm:mt-16">
    <h2 class="sm:ml-20 sm:mb-5 sm:text-2xl text-[20px] mt-5 mb-2 ml-5">top du moment</h2>
    <div class="sm:gap-x-10 sm:px-20 flex px-5 justify-center items-center mx-auto gap-x-4">
      <button @click="controlledSwiper.slidePrev()" class="sm:left-4 rounded-[18.75px] text-black text-4xl absolute left-1 w-[45px] h-[45px] bg-gradient-to-r from-[#F18303] to-[#F94409]" >&lt;</button>
      <swiper
          :controller="{ control: controlledSwiper }"
          @swiper="setControlledSwiper"
          :slidesPerView="5"
          :spaceBetween="30"
          :slidesPerGroup="5"
          :loop="true"
          :loopFillGroupWithBlank="true"
          :pagination="{clickable: true}"
          :modules="[Controller, Pagination]"
          class="mySwiper"
      >
        <swiper-slide v-for="(vg) in listTopVideoGames" class="text-center">
          <img class="rounded-3xl" v-if="vg.cover" :src="vg.cover.url.replace('t_thumb', 't_720p')" :alt="vg.name"/>
        </swiper-slide>
      </swiper>
      <button @click="controlledSwiper.slideNext()" class="sm:right-4 rounded-[18.75px] text-black text-4xl absolute right-1 w-[45px] h-[45px] bg-gradient-to-r from-[#F18303] to-[#F94409]">&gt;</button>
    </div>
    <secondary-button class="mt-8 ml-8">voir plus...</secondary-button>
  </div>
</template>

<style scoped>

</style>