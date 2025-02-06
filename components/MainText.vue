  <template>
    <div class="flex flex-col gap-4 w-full">
      <input
          class="text-3xl font-semibold bg-transparent border-b border-white/20 focus:border-white outline-none text-white px-2 w-full transition duration-200"
          placeholder="Untitled"
          v-model="title"
      />

      <textarea
          ref="textArea"
          class="bg-transparent text-white text-lg leading-6 px-2 w-full resize-none outline-none overflow-hidden"
          placeholder="Start typing..."
          v-model="text"
          @input="adjustHeight"
      />
    </div>
  </template>

  <style scoped>

  input, textarea {
    border: none;
    background: none;
    outline: none;
  }

  input:focus {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }


  textarea {
    line-height: 1.5;
    min-height: 150px;
    max-height: 600px;
  }
  </style>

  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import {updateNote} from "~/pages/functions/update-note";


  const props = defineProps({
    title: String,
    text: String,
    id: Number,
    updateNotesData: Function,
  });


  let intervalId: number | null = null;

  onMounted(() => {
    intervalId = setInterval(() => {
      updateNote(props.id, title.value, text.value, props.updateNotesData);
    }, 1000);
  });

  onUnmounted(() => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  });

  watch(() => props.title, (newVal) => {
    title.value = newVal || '';
  });
  watch(() => props.text, (newVal) => {
    text.value = newVal || '';
  });



  const title = ref(props.title || '');
  const text = ref(props.text || '');
  const textArea = ref<HTMLTextAreaElement | null>(null);

  const adjustHeight = () => {
    if (textArea.value) {
      textArea.value.style.height = 'auto';
      textArea.value.style.height = `${textArea.value.scrollHeight}px`;
    }
  };

  onMounted(() => {
    adjustHeight();
  });
  </script>
