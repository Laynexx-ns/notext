<script setup lang="ts">
const props = defineProps({
  active: Boolean,
})
</script>

<template>
  <div :class="(props.active ? 'bg-[#A78BFA]/60' : 'bg-black') + ' item-btn px-5 py-6 rounded-xl flex flex-col gap-4 w-full hover:bg-violet-600/20 hover:translate-x-1 transition'">
    <h3 class="truncate opacity-90 ">Finally moved in my new apartment and loving it!</h3>
    <div class="flex justify-between gap-8">
      <span class="text-sm opacity-70">Today</span>
      <span class="opacity-50 text-sm truncate">Finally moved in my new apartment and loving it!</span>
    </div>
  </div>
</template>


<style scoped>
@font-face {
  font-family: 'Monaspace';
  src: url('../assets/fonts/MonaspaceNeon.ttf');
}

.item-btn{
  font-family: Monaspace, sans-serif;
}
</style>