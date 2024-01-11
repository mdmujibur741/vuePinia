<template>
  <div class="about pt-6 bg-gray-100 min-h-[100vh]">
    <h1 class="bg-blue-700 text-white max-w-3xl mx-auto text-xl my-3 font-semibold px-2 py-1 ">This is an about page</h1>
         <form @submit.prevent="submit" method="post" class="max-w-3xl text-black mx-auto p-8  shadow-2xl">
          
          <div class="mb-3">
            <label for="" class="mb-2" >Id</label>
            <input type="text" v-model="form.id" class="w-full px-2 py-1  border">
          </div>

          <div class="mb-3">
              <label for="" class="mb-2" >Title</label>
              <input type="text" v-model="form.title" class="w-full px-2 py-1  border">
            </div>

           <div class="text-center">
            <button class="w-18 mx-auto bg-blue-700 text-white px-4 py-1 rounded-md">Submit</button>
           </div>
         </form>
  </div>
</template>

<script setup>
   import { reactive, ref } from 'vue';
   import {useTaskStore} from '../stores/TaskStore.js';

   const taskStore = useTaskStore();
 
   const form = reactive({
          id : '',
          title : '',
          isFav : false,
   })


   const submit = () => {
          taskStore.addTask(form)
   }


function success(){
    form.id = '';
    form.title = '';
}
</script>

