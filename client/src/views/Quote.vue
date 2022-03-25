<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import useQuotesServices from '../services/quotes.services'
const route = useRoute();

const {get} = useQuotesServices()
const quote = ref({});

onMounted(() => {
  get(route.params.id).then((res) => quote.value = res.data).catch((err) => console.log(err))
})
</script>

<template>
  <div class="py-3">
    <div class="mx-auto max-w-screen-lg">
      <h1 class="text-3xl text-center">{{ quote.author }}</h1>
      <p class="my-5 text-2xl text-center text-gray-500">
        "{{ quote.content }}"
      </p>
    </div>
  </div>
</template>
