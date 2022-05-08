<script setup lang="ts">
import SecondaryButton from "@/components/buttons/SecondaryButton.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Controller, Navigation, Pagination } from 'swiper';
import GameModal from "@/components/GameModal.vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {ref} from "vue";

defineEmits(['selectedGame'])

const props = defineProps({
  idSlide: Number,
  listGames: {},
  title: String,
})

const resetSwipe = ref(false)

const resetPagination = (swiper) => {
  if (!swiper) return
  resetSwipe.value = !resetSwipe.value
  swiper.update()
}

const openModal = ref(false);
</script>

<template>
  <div class="sm:mt-16">
    <h2 class="sm:ml-20 sm:mb-5 sm:text-2xl text-[20px] mt-5 mb-2 ml-5">{{ title }}</h2>
    <div class="sm:gap-x-10 sm:px-20 flex px-5 justify-center items-center mx-auto gap-x-4">
      <button :class="'prevArrow' + idSlide" class="sm:left-4 rounded-[18.75px] text-black text-4xl absolute left-1 w-[45px] h-[45px] bg-gradient-to-r from-[#F18303] to-[#F94409] z-10" >&lt;</button>
      <swiper
          :key="resetSwipe.value"
          :navigation="{ nextEl: '.nextArrow' + idSlide, prevEl: '.prevArrow' + idSlide }"
          :spaceBetween="30"
          :slidesPerView="5"
          :slidesPerGroup="5"
          :loop="true"
          :loopFillGroupWithBlank="true"
          :pagination="{clickable: true}"
          :modules="[Controller, Pagination, Navigation]"
          @breakpoint="resetPagination($event)"
          :breakpoints="{
              0:{
                slidesPerView:2,
                slidesPerGroup:2,
              },
              1024: {
                slidesPerView:5,
                slidesPerGroup:5,
              }
          }"
          class="mySwiper"
      >
        <swiper-slide v-for="(vg) in props.listGames" class="slide-covers text-center flex items-center justify-center cursor-pointer" @click="$emit('selectedGame', vg.id)">
          <img class="rounded-3xl img-cover" v-if="vg.cover" :src="vg.cover.url.replace('t_thumb', 't_720p')" :alt="vg.name"/>
          <img v-else class="img-cover" :alt="vg.name" src=""/>
          <span class="img-name absolute z-10 hidden">{{ vg.name }}</span>
        </swiper-slide>
      </swiper>
      <button :class="'nextArrow' + idSlide" class="sm:left-[96.3vw] rounded-[18.75px] text-black text-4xl absolute right-1 w-[45px] h-[45px] bg-gradient-to-r from-[#F18303] to-[#F94409] z-10">&gt;</button>
    </div>
    <secondary-button class="mt-8 ml-8">voir plus...</secondary-button>
  </div>
</template>


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