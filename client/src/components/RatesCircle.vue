<template>
  <div>
    <svg class="transform-rotate-90 w-24 h-24">
      <circle cx="48" cy="48" r="45" stroke="currentColor" stroke-width="5" fill="#303234"
              class="text-gray-700" />

      <circle cx="48" cy="48" r="45" stroke="url(#gradient-circle)" stroke-width="5" fill="transparent"
              :stroke-dasharray="280"
              :stroke-dashoffset="280 - getRate() / 100 * 280"
              class="text-blue-500 " />
    </svg>
    <span class="absolute text-2xl">{{ getTextRate() }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  rate:Number,
})

const getRate = () => props.rate ? props.rate : 0
const getTextRate = () => props.rate ? `${props.rate}%` : "?"
</script>

<style scoped>

</style>