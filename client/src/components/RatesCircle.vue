<template>
  <div>
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
    <span class="absolute text-2xl">{{ `${rate}%` }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  rate:Number,
})
</script>

<style scoped>

</style>