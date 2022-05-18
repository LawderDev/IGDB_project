<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="$emit('closeModal')">
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
            <div class="relative inline-block align-bottom bg-[#303234] rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[90vw] lg:w-[30vw]">
            <div class="pb-4 text-white">
              <div class="text-md sm:text-lg">
                <div class="absolute">
                  <button @click="$emit('closeModal')" class="relative left-[78vw] sm:left-[82vw] lg:left-[25vw] xl:left-[27vw]">
                    <font-awesome-icon :icon="['fas', 'xmark']" size="3x" class="icon-gradient" />
                  </button>
                </div>

                <div class="px-4 mt-3">
                    <div class="flex justify-center">
                      <div class="w-[83vw] lg:w-[50vw] pb-1">
                        <div class="text-center border-b border-gray-400 mb-2">
                          <button class="w-20 h-20 lg:w-20 lg:h-20 bg-gray-200 rounded-full mb-1"></button>
                          <div class="flex justify-center pb-2">
                            <button class="flex gap-2" >
                              <DialogTitle as="h3" class="text-xl sm:text-2xl leading-6 font-medium"> {{ store.state.user.name }} </DialogTitle>
                              <font-awesome-icon :icon="['far', 'pen-to-square']" size="lg" class="icon-gradient" />
                            </button>
                          </div>
                        </div>
                        <button class="flex gap-2">
                          <span class="text-gradient">supprimer le compte</span>
                          <font-awesome-icon :icon="['fas', 'triangle-exclamation']" size="lg" class="icon-gradient" />
                        </button>
                      </div>
                    </div>
                </div>
              </div>
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
import { useStore } from "vuex"
const store = useStore()
defineEmits(['closeModal'])

defineProps({
  open: Boolean,
})
</script>

<style lang="scss">
.icon-gradient path{
  @apply fill-[url(#gradient-circle)];
}

.text-gradient{
  background: -webkit-linear-gradient(.90turn, #F18303, #F94409);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#close-button{
  @apply w-full h-10 text-lg
}
</style>