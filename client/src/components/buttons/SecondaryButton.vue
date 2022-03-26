<script setup lang="ts">
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
</script>

<template>
  <primary-button class="after:content-[''] after:absolute after:inset-[-2px] after:rounded-full after:z-30 after:bg-[#303234]">
    <span class="z-40 relative"><slot/></span>
  </primary-button>
</template>

<style scoped>

</style>