<template>
  <button class="primary-button text-slate-300">
    <slot/>
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
.primary-button{
  @apply text-[#FFF]
  text-xl
  relative
  border-none
  w-32 h-10
  text-center
  rounded-full
  z-10
  bg-gradient-to-r from-[#F18303] to-[#F94409]
  before:content-['']
  before:absolute
  before:inset-[-5px]
  before:z-[-1]
  before:rounded-full
  before:duration-1000 before:bg-gradient-to-r before:from-[#F18303] before:to-[#F94409]
  hover:before:blur-lg active:bg-gradient-to-r active:from-[#F18303] active:to-[#F94409];
}
</style>