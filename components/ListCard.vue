<script setup lang="ts">
const props = defineProps({
  active: Boolean,
  text: String,
  title: String,
  timed: String,
})
</script>

<template>
  <div :class="(props.active ? 'bg-[#A78BFA]/60' : 'bg-black') + ' item-btn px-5 py-6 rounded-xl flex flex-col gap-4 w-full hover:bg-violet-600/20 hover:translate-x-1 transition'"
      @click="$emit('click')"
  >
    <h3 class="truncate opacity-90 ">{{props.title}}</h3>
    <div class="flex justify-between gap-8">
      <span class="text-sm opacity-70">{{props.timed}}</span>
      <span class="opacity-50 text-sm truncate">{{props.text}}</span>
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