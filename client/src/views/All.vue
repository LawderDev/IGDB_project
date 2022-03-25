<template>
        <router-link
            v-for="user in users"
            :key="user._id"
            :to="`/quote/${user._id}`">
            <p class="bg-gray-200 my-5 text-lg text-center text-gray-500">
              <span>"{{ user.name }}"</span><br>
            </p>
        </router-link>
</template>

<script setup lang="ts">
import useUsersServices from '../services/users.services'
import {onMounted, ref} from "vue";
const {getAll} = useUsersServices()
import {User} from "../types/UserType";

let users = ref(Array<User>())
onMounted(() =>
  getAll().then((res) => users.value = res.data).catch((err) => console.log(err))
)

</script>

<style scoped>

</style>