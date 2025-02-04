
<template>
  <div class="flex flex-col gap-8 text-center justify-items-center">
    <h1 class="text-2xl">{{props.title}}</h1>
    <span >{{props.text}}</span>
  </div>
</template>

<style scoped>

</style>



<script setup lang="ts">
const props = defineProps({
  title: String,
  text: String,

})
</script>
