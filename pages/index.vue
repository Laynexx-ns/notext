<script setup lang="ts">

import Trash from "~/components/trash.vue";
import Create from "~/components/create.vue";

definePageMeta({
  middleware: ['auth']
})



</script>

<template>
  <div class="flex relative  h-screen w-screen">

<!--    left-->
    <div class="group relative mt-10 py-16 px-6 justify-start text-left flex flex-col gap-4 text-white -translate-y-20 transition-all duration-500 max-w-[300px] hover:pr-4 hover:max-w-[500px]">

    <Logo class="size-[120px]" />

      <div class="mt-12 overflow-y-auto scrollbar-hide flex flex-col gap-16">
        <div>
          <h3 class="text-bold opacity-70">Today</h3>
          <FilesList/>
        </div>
        <div>
          <h3 class="text-bold opacity-70">Yesterday</h3>
          <FilesList/>
        </div>
        <div>
          <h3 class="text-bold opacity-70">Last 30 days</h3>
          <FilesList/>
        </div>

      </div>
    </div>
<!--    left-->



    <!--   right -->
    <div class="flex-1 bg-black  flex flex-col p-4 h-screen ">
      <div class="flex justify-between items-center py-4 px-8 h-16 border-b border-white/10">
        <div class="flex flex-row items-center gap-4">
          <Create class="fill-white" />
          <span>Create Note</span>
        </div>

      <Trash />
    </div>


      <div class="flex-1 overflow-y-auto py-16 px-24 flex justify-center items-center -translate-y-10 gap-8">
        <MainText />
      </div>

      <div class="border-white/10 w-full text-white/60 pt-4 border-t flex justify-between items-center relative">
        <span>15.08.2008</span>
        <span class="absolute left-1/2 -translate-x-1/2">laynexx</span>
      </div>


    </div>
    <!--   right -->
  </div>
</template>

<style scoped>

</style>


