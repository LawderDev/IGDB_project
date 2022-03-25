<template>
        <router-link
            v-for="quote in quotes"
            :key="quote._id"
            :to="`/quote/${quote._id}`">
            <p class="bg-gray-200 my-5 text-lg text-center text-gray-500">
              <span>"{{ quote.content }}"</span><br>
              <span class="text-gray-400"> {{ quote.author }}</span>
            </p>
        </router-link>
</template>

<script setup lang="ts">
import useQuotesServices from '../services/quotes.services'
import {onMounted, ref} from "vue";
const {getAll} = useQuotesServices()
import {Quote} from "../types/QuoteType";

let quotes = ref(Array<Quote>())
onMounted(() =>
  getAll().then((res) => quotes.value = res.data).catch((err) => console.log(err))
)

</script>

<style scoped>

</style>