<script setup lang="ts">

const email = ref('');
const password = ref('');

const submit = () => {
  
}
</script>

<template>
 <div class="flex relative  h-screen w-screen">
   <div class="flex relative justify-center text-left flex-col py-8 px-12 gap-4 sm:w-2/3 text-white lg:w-1/3 -translate-y-20">
   <Logo class="size-[120px]" />
      <div class="flex flex-col gap-1">
        <b class="text-xl">Signup for a free account</b>
        <span class="lg:text-md text-sm opacity-70">Already registered? <span class="font-bold underline text-[#D8B4FE]">Log in</span> to your account</span>
      </div>
<!--     inputs -->
     <form @submit.prevent="submit">
       <div class="mt-12 flex flex-col gap-6">
         <div class="flex flex-col gap-1 ">
           <label for="" class="text-white ml-1 text-sm block">Email Address</label>
           <input v-model="email" placeholder="your_wonderful@email.com"  type="email" class="rounded-md bg-[#27272A] border border-[#3F3F46] block p-2 font-thin   text-white w-full"/>
         </div>
         <div class="flex flex-col gap-1 ">
           <label for="" class="text-white ml-1 text-sm block">Password</label>
           <input v-model="password" placeholder="your-beautiful-password!"  type="password" class="rounded-md bg-[#27272A] border border-[#3F3F46] block p-2 font-thin   text-white w-full"/>
         </div>
       </div>
       <!--     inputs-->


      <!--     sign up btn-->
       <button class="mt-8 bg-[#D8B4FE] w-full px-4 py-2 font-bold rounded-xl">Sign Up</button>
     </form>
     <!--     sign up btn-->

   </div>
<!--   right holder-->
   <div class="flex-1 bg-black">

   </div>
<!--   right holder-->
 </div>
</template>

<style scoped>

</style>


