<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import useUsersServices from '../services/users.services'
const route = useRoute();

const {get} = useUsersServices()
const user = ref({});

onMounted(() => {
  get(route.params.id).then((res) => user.value = res.data).catch((err) => console.log(err))
})
</script>

<template>
  <div class="py-3">
    <div class="mx-auto max-w-screen-lg">
      <h1 class="text-3xl text-center">{{ user.name }}</h1>
    </div>
  </div>
</template>
