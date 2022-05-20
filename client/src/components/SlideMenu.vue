<script setup lang="ts">
import PrimaryButton from "@/components/buttons/PrimaryButton.vue"
import SecondaryButton from "@/components/buttons/SecondaryButton.vue";
import {ref} from "vue";

const slider = ref({} as HTMLElement)

const isOpen = ref(false)
const performSlider = () => {
  if(!slider) return
  slider.value.style.left = isOpen.value ? '-110vw' : '0'
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div>
    <div class="w-10 flex flex-col gap-y-2 cursor-pointer z-40 relative" @click="performSlider()">
      <div class="w-[42px] h-[6px] bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
      <div class="w-[29px] h-[6px] bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
      <div class="w-[42 px] h-[6px] bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
    </div>

    <div ref="slider" class="sm:w-[20vw] backdrop-blur-sm fixed transition-[left] duration-500 left-[-150vw] ease-in-out w-screen h-screen top-0 bg-opacity-90 bg-[#303234]">
        <div>
        <ul class="mt-24 pb-10 pl-7 text-5xl flex flex-col gap-y-8 text-4xl">
          <li>
            <router-link class="item-menu" to="/">Accueil</router-link>
          </li>
          <li>
            <a class="item-menu" href="">Accueil</a>
          </li>
          <li>
            <a class="item-menu" href="">Accueil</a>
          </li>
          <li>
            <a class="item-menu" href="">Accueil</a>
          </li>
        </ul>

        <ul class="ml-10 pt-8 flex text-5xl gap-x-8 border-t-2 border-[#6B6B6B] w-[70%] text-4xl">
          <li>F</li>
          <li>I</li>
          <li>Ln</li>
        </ul>

        <div class="pl-10 pt-8 flex text-5xl gap-x-8 relative">
          <secondary-button>Connexion</secondary-button>
          <primary-button>Inscription</primary-button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.item-menu{
  @apply before:inline-block
  before:w-0
  before:mr-3
  before:h-5
  before:relative
  before:bg-gradient-to-r
  before:from-[#F18303]
  before:to-[#F94409]
  before:rounded-full
  before:transition-[width]
  before:ease-in-out
  hover:before:w-5
}
</style>