<script setup lang="ts">
import PrimaryButton from "@/components/buttons/PrimaryButton.vue"
import SecondaryButton from "@/components/buttons/SecondaryButton.vue";
import {ref} from "vue";

const slider = ref({} as HTMLElement)

const performSlider = () => slider && (slider.value.style.left = '0')
const closeSlider = () => slider && (slider.value.style.left = '-1000px')
</script>

<template>
  <div>
    <div class="w-10 flex flex-col gap-y-2 cursor-pointer" @click="performSlider">
      <div class="w-8 h-1 bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
      <div class="w-6 h-1 bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
      <div class="w-8 h-1 bg-gradient-to-r from-[#F18303] to-[#F94409]"></div>
    </div>

    <div ref="slider" class="backdrop-blur-sm absolute transition-[left] duration-500 left-[-1000px] w-screen h-screen left-0 top-0 bg-opacity-90 bg-[#303234]">
      <div class="text-5xl pl-10 mt-10" @click="closeSlider">X</div>
      <ul class="mt-10 pb-10 pl-10 text-5xl flex flex-col gap-y-8 border-b-2 border-[#6B6B6B]">
        <li>Accueil</li>
        <li>Accueil</li>
        <li>Accueil</li>
        <li>Accueil</li>
      </ul>


      <ul class="pl-10 pt-8 flex text-5xl gap-x-8">
        <li>F</li>
        <li>I</li>
        <li>Ln</li>
      </ul>

      <div class="pl-10 pt-8 flex text-5xl gap-x-8 relative">
        <secondary-button label="Connexion"></secondary-button>
        <primary-button label="Inscription"></primary-button>
      </div>
    </div>
  </div>
</template>


<style scoped>
#container-options{
  display: flex;
  align-items: center;
  position: relative;
  width: 0;
  transition: 550ms width ease-in-out;
}

</style>