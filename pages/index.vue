<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { $fetch } from 'ofetch';
import Trash from '~/components/trash.vue';
import Create from '~/components/create.vue';
import ListCard from '~/components/ListCard.vue';
import MainText from '~/components/MainText.vue';

definePageMeta({
  middleware: ['auth']
});

const activeNote = ref<any>(null);

const notes = ref<any[]>([]);
const todayNotes = ref<any[]>([]);
const yesterdayNotes = ref<any[]>([]);
const otherNotes = ref<any[]>([]);

onMounted(async () => {
  notes.value = await $fetch('/api/notes');
  const currentTime = Date.now();

  if (localStorage.getItem('activeNote')) {
    activeNote.value = JSON.parse(localStorage.getItem('activeNote') || '{}');
    console.log(activeNote.value);
  } else {
    activeNote.value = notes.value[0] || null;
  }

  todayNotes.value = notes.value.filter((item) => {
    const noteTime = new Date(item.createdAt).getTime();
    return currentTime - noteTime < 24 * 60 * 60 * 1000;
  });

  yesterdayNotes.value = notes.value.filter((item) => {
    const noteTime = new Date(item.createdAt).getTime();
    return currentTime - noteTime >= 24 * 60 * 60 * 1000 && currentTime - noteTime < 48 * 60 * 60 * 1000;
  });

  otherNotes.value = notes.value.filter((item) => {
    const noteTime = new Date(item.createdAt).getTime();
    return currentTime - noteTime >= 48 * 60 * 60 * 1000;
  });

  console.log('today notes: ', todayNotes.value);
});

const setActiveNote = (note: any) => {
  activeNote.value = note;
  localStorage.setItem('activeNote', JSON.stringify(activeNote.value));
};
</script>


<template>
  <div class="flex relative h-screen w-screen">
    <div class="group relative mt-10 py-16 px-6 justify-start text-left flex flex-col gap-4 text-white -translate-y-20 transition-all duration-500 max-w-[300px] hover:pr-4 hover:max-w-[500px]">
      <Logo class="size-[120px]" />
      <div class="mt-12 overflow-y-auto scrollbar-hide flex flex-col gap-16">
        <div>
          <h3 class="text-bold mb-8 opacity-70">Today</h3>
          <ListCard
              v-for="(note, index) in todayNotes"
              :key="note.id"
              :active="activeNote?.id === note.id"
              :title="note.title"
              :text="note.text"
              timed="Today"
              @click="setActiveNote(note)"
          />
        </div>
        <div>
          <h3 class="text-bold mb-8 opacity-70">Yesterday</h3>
          <ListCard
              v-for="(note, index) in yesterdayNotes"
              :key="note.id"
              :active="activeNote?.id === note.id"
              :title="note.title"
              :text="note.text"
              timed="Yesterday"
              @click="setActiveNote(note)"
          />
        </div>
        <div>
          <h3 class="text-bold mb-8 opacity-70">Later</h3>
          <ListCard
              v-for="(note, index) in otherNotes"
              :key="note.id"
              :active="activeNote?.id === note.id"
              :title="note.title"
              :text="note.text"
              timed="..."
              @click="setActiveNote(note)"
          />
        </div>
      </div>
    </div>

    <div class="flex-1 bg-black flex flex-col p-4 h-screen">
      <div class="flex justify-between items-center py-4 px-8 h-16 border-b border-white/10">
        <div class="flex flex-row items-center gap-4">
          <Create class="fill-white" />
          <span>Create Note</span>
        </div>
        <Trash />
      </div>
      <div class="flex-1 overflow-y-auto py-16 px-24 flex justify-center items-center -translate-y-10 gap-8">
        <MainText v-if="activeNote" :title="activeNote.title" :text="activeNote.text" />
      </div>
      <div class="border-white/10 w-full text-white/60 pt-4 border-t flex justify-between items-center relative">
        <span>{{ activeNote ? new Date(activeNote.createdAt).toLocaleDateString() : '' }}</span>
        <span class="absolute left-1/2 -translate-x-1/2">laynexx</span>
      </div>
    </div>
  </div>
</template>
