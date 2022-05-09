<template>
  <div>
    <p class="text-white">{{ title }}</p>
    <label class="relative flex flex-col group p-2">
      <input type="checkbox" class="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
      <span id="cursor" class="w-16 h-10 ml-4 p-1"></span>
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String
})
</script>

<style scoped lang="scss">
 #cursor{
   @apply
   flex items-center
   flex-shrink-0
   bg-gray-600
   rounded-full
   duration-300
   ease-in-out
   peer-checked:bg-gradient-to-r
   peer-checked:from-[#F18303]
   peer-checked:to-[#F94409]
   after:w-8
   after:h-8
   after:bg-white
   after:rounded-full
   after:shadow-md
   after:duration-300
   peer-checked:after:translate-x-6
   group-hover:after:translate-x-1
 }
</style>