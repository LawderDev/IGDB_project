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
          <div class="relative inline-block align-bottom bg-[#303234] rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="pb-4 sm:p-6 sm:pb-4 text-white">
              <div class="sm:flex sm:items-start text-md">
                <div class="max-h-[25vh] overflow-hidden rounded-3xl">
                  <img class="" v-if="state.game.artworks" :src="state.game.artworks[0].url.replace('t_thumb', 't_1080p')" :alt="state.game.id"/>
                </div>
                <div class="absolute">
                  <div class="relative left-72 top-[-3rem] flex items-center justify-center ">
                    <svg class="transform-rotate-90 w-24 h-24">
                      <defs>
                        <linearGradient id="gradient-circle">
                          <stop offset="0%" stop-color="#F18303" />
                          <stop offset="100%" stop-color="#F94409" />
                        </linearGradient>
                      </defs>
                      <circle cx="48" cy="48" r="45" stroke="currentColor" stroke-width="5" fill="#303234"
                              class="text-gray-700" />

                      <circle cx="48" cy="48" r="45" stroke="url(#gradient-circle)" stroke-width="5" fill="transparent"
                              :stroke-dasharray="280"
                              :stroke-dashoffset="280 - 90 / 100 * 280"
                              class="text-blue-500 " />
                    </svg>
                    <span class="absolute text-2xl">{{ `${Math.round(state.game.total_rating*10)/10}%` }}</span>
                  </div>
                </div>

                <div class="px-4 mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                  <div class="border-b border-gray-400">
                    <div class="flex">
                      <div>
                        <DialogTitle as="h3" class="text-xl leading-6 font-medium"> {{ state.game.name }} </DialogTitle>
                        <p>{{ formatReleasedDate() }}</p>
                        <p v-if="state.game.involved_companies" class="italic">{{ state.game.involved_companies[0].company.name }}</p>
                        <p><span class="text-slate-400">Support: </span>{{ formatInlineTab(state.game.platforms, ',') }}</p>
                        <p><span class="text-slate-400">Genres: </span>{{ formatInlineTab(state.game.genres, '/') }}</p>
                      </div>
                      <div class="flex justify-center items-center gap-x-6 mr-2 pl-14">
                        <p>test</p>
                        <p>test</p>
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
            <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">Deactivate</button>
              <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="$emit('closeModal')" ref="cancelButtonRef">Cancel</button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationIcon } from '@heroicons/vue/outline'
import {reactive, watch} from "vue";
const { getGameById } = useIgdbServices()
import dayjs from "dayjs"
import useIgdbServices from "@/services/igdb.services";

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

<style scoped lang="scss">

</style>