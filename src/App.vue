<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

     <div class="flex justify-center bg-gray-100 gap-x-4 text-lg font-semibold ">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
     </div>


  <RouterView />
</template>

