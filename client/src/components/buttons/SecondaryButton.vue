<script setup lang="ts">
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
defineProps<{label:string}>()
</script>

<template>
  <primary-button class="after:content-[''] after:absolute after:inset-[-2px] after:rounded-full after:z-30 after:bg-[#303234]"
                  :label="label">
  </primary-button>
</template>

<style scoped>

</style>