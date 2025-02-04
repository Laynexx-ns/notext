<script setup lang="ts">
import Swal from 'sweetalert2';
import {$fetch} from "ofetch";

const email = ref('');
const password = ref('');


const submit = async () => {
  try {
    const resp = await $fetch('/api/user', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    });

    navigateTo('/')

  } catch (err) {
    console.log(err.response);
    await Swal.fire({
      icon: "error",
      title: err.response.status,
      text: err.response._data.message,
      footer: '<a href="#">Why do I have this issue?</a>',
      confirmButtonText: "Ok, i'll try another data!"
    });
  }
}

</script>

<template>
 <div class="flex relative  h-screen w-screen">
   <div class="flex relative justify-center text-left flex-col py-8 px-12 gap-4 sm:w-2/3 text-white lg:w-1/3 -translate-y-20">
   <Logo class="size-[120px]" />
      <div class="flex flex-col gap-1">
        <b class="text-xl">Sign up for a free account</b>
        <span class="lg:text-md text-sm opacity-70">Already registered? <nuxt-link to="/login" class="font-bold underline text-[#D8B4FE]">Log in</nuxt-link> to your account</span>
      </div>
<!--     inputs -->
     <form @submit.prevent="submit">
       <div class="mt-12 flex flex-col gap-6">
         <div class="flex flex-col gap-1 ">

           <label :class="'text-white ml-1 text-sm block'">Email Address</label>
           <input v-model="email" placeholder="your_wonderful@email.com"  type="email" class="rounded-md bg-[#27272A] border border-[#3F3F46] block p-2 font-thin   text-white w-full"/>

         </div>
         <div class="flex flex-col gap-1 ">
           <label for="" class="text-white ml-1 text-sm block">Password</label>
           <input v-model="password" placeholder="your-beautiful-password!"  type="password" class="rounded-md bg-[#27272A] border border-[#3F3F46] block p-2 font-thin   text-white w-full"/>
         </div>
       </div>
       <!--     inputs-->


      <!--     sign up btn-->
       <button class="mt-8 bg-[#a78bfa] w-full px-4 py-2 font-bold rounded-xl">Sign Up</button>
     </form>
     <!--     sign up btn-->

   </div>
<!--   right holder-->
   <div class="flex-1 bg-black flex flex-col p-4 items-center gap-8 justify-center">

   </div>
<!--   right holder-->
 </div>
</template>

<style scoped>

</style>


