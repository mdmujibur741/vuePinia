<script setup>
        import { useTaskStore } from '@/stores/TaskStore';
        import { ref } from 'vue';
        const store = useTaskStore();
        const tab = ref(1);
</script>

<template>
      <section class="bg-gray-100 min-h-[100vh] w-full p-8 ">
         <div class="w-7/12 mx-auto flex justify-start bg-white shadow-2xl text-lg p-1 gap-2">
              <button @click="tab = 1" class="bg-gray-200 border border-blue-600 shadow-xl p-1 rounded-xl font-semibold">All language </button>
              <button @click="tab =2" class="bg-gray-200 border border-blue-600 shadow-xl p-1 rounded-xl font-semibold">Favorite Language </button>
         </div>
   
         <div v-if="tab==1">
            <h2 class="bg-white text-2xl font-semibold px-3 py-2 rounded-2xl mt-9 shadow-2xl w-7/12 mx-auto tex-black">  All Language ({{ store.totalCount }}) </h2>
            <div class="text-black pt-9 w-7/12 shadow-xl bg-white mx-auto p-2 rounded-xl m-1">
                <div v-for="tas in store.tasks" :key="tas.id" class="p-1">
                    <div class="bg-blue-700 text-semibold text-xl  text-white rounded-md m-2 px-3 text-center w-full mx-auto flex justify-between"> <span>{{ tas.title }}</span>  <span><i class="fa-solid fa-heart fa-fw"></i> <i class="fa-solid fa-trash fa-fw"></i></span> </div>
                </div>
            </div>
         </div>

          <div v-if="tab==2">
            <h2 class="bg-white text-2xl font-semibold px-3 py-2 rounded-2xl mt-9 shadow-2xl w-7/12 mx-auto tex-black">  Favorite Language ({{ store.favCount }}) </h2>
            <div class="text-black pt-9 w-7/12 shadow-xl bg-white mx-auto p-2 rounded-xl mt-2 ">
              <div v-for="tas in store.fav" :key="tas.id" class="p-1">
                  <div class="bg-blue-700 text-semibold text-xl  text-white rounded-md m-2 px-3 text-center w-full mx-auto flex justify-between"> <span>{{ tas.title }}</span>  <span><i class="fa-solid fa-heart fa-fw"></i> <i class="fa-solid fa-trash fa-fw"></i></span> </div>
              </div>
            </div>
          </div>
      </section>
</template>
