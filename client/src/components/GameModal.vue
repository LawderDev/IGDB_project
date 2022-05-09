<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="open = false">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template"
                         enter="ease-out duration-300"
                         enter-from="opacity-0"
                         enter-to="opacity-100"
                         leave="ease-in duration-200"
                         leave-from="opacity-100"
                         leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template"
                         enter="ease-out duration-300"
                         enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                         enter-to="opacity-100 translate-y-0 sm:scale-100"
                         leave="ease-in duration-200"
                         leave-from="opacity-100 translate-y-0 sm:scale-100"
                         leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="relative inline-block align-bottom bg-[#303234] rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[90vw]">
            <div class="pb-4 text-white">
              <div class="text-md sm:text-lg">
                <div class="absolute">
                  <button @click="$emit('closeModal')" class="relative left-[82vw] lg:left-[85vw] xl:left-[87vw] top-3">
                    <font-awesome-icon :icon="['fas', 'xmark']" size="3x" class="icon-gradient" />
                  </button>
                </div>
                <div class="max-h-[25vh] sm:max-h-[35vh] overflow-hidden rounded-3xl">
                  <img class="w-full" v-if="state.game.artworks" :src="state.game.artworks[0].url.replace('t_thumb', 't_1080p')" :alt="state.game.id"/>
                  <div class="h-[35vh] bg-gray-600 flex items-center justify-center" v-else>Aucun artwork disponible</div>
                </div>

                <div class="absolute">
                  <rates-circle :rate="Math.round(state.game.total_rating*10/10)" class="relative sm:left-[77vw] left-[65vw] top-[-3rem] flex items-center justify-center text-md sm:text-lg"></rates-circle>
                </div>

                <div class="px-4 sm:px-10 mt-3">
                  <div class="border-b border-gray-400">
                    <div class="flex">
                      <div class="sm:w-[55vw] lg:w-[60vw] pb-3">
                        <DialogTitle as="h3" class="text-xl sm:text-2xl leading-6 font-medium"> {{ state.game.name }} </DialogTitle>
                        <p>{{ formatReleasedDate() }}</p>
                        <p v-if="state.game.involved_companies" class="italic">{{ state.game.involved_companies[0].company.name }}</p>
                        <p><span class="text-slate-400">Support: </span>{{ formatInlineTab(state.game.platforms, ',') }}</p>
                        <p><span class="text-slate-400">Genres: </span>{{ formatInlineTab(state.game.genres, '/') }}</p>
                      </div>
                      <div class="flex justify-center items-center gap-x-6 mr-2 sm:pl-[10vw]">
                        <button>
                          <font-awesome-icon :icon="['far', 'bookmark']" size="2x" class="icon-gradient" />
                        </button>
                        <button>
                          <font-awesome-icon :icon="['far', 'heart']"  size="2x" class="icon-gradient" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="mt-2">
                    <p>
                      <span class="text-slate-400">Synopsys:</span>
                      {{ state.game.summary }}
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div class="flex items-center justify-center gap-16 text-md sm:text-lg mb-5">
              <toggle-switch title="En cours de jeu"></toggle-switch>
              <toggle-switch title="Jeu terminé"></toggle-switch>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {reactive, watch} from "vue";
import RatesCircle from "@/components/RatesCircle.vue";
import ToggleSwitch from "@/components/ToggleSwitch.vue";
const { getGameById } = useIgdbServices()
import dayjs from "dayjs"
import useIgdbServices from "@/services/igdb.services";
import SecondaryButton from "@/components/buttons/SecondaryButton.vue";

const props = defineProps({
  open: Boolean,
  id: Number,
})

defineEmits(['closeModal'])

const state = reactive({
  game: {},
})


watch(() => props.id, (newId) => {
  getGameById(newId as number).then((res) => {
   state.game = res.data[0]
    console.log(res.data)
  })
})

const formatReleasedDate = () => dayjs(state.game.first_release_date * 1000).format('DD/MM/YYYY')

const formatInlineTab = (tab:[], separator:string) => {
  if(!tab) return
  let str = ""
  tab.forEach((item) => str += item.name + separator)
  return str.substring(0, str.length-1)
}
</script>

<style lang="scss">
.icon-gradient path{
  @apply fill-[url(#gradient-circle)];
}

#close-button{
  @apply w-full h-10 text-lg
}
</style>