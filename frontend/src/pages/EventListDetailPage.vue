<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Event } from '../types/Event';
import { getEvent } from '../api/http';

type Status = 'loading' | 'success' | 'error';

const route = useRoute();
const status = ref<Status>('loading');
const event = ref<Event | null>(null);
let currentController: AbortController | null = null;

async function loadEvent(eventId: string) {
  if (currentController) {
    currentController.abort();
  }
  currentController = new AbortController();
  const controller = currentController;

  status.value = 'loading';
  try {
    const data = await getEvent(eventId, controller.signal);
    event.value = data;
    status.value = 'success';
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return;
    }
    status.value = 'error';
  }
}

onMounted(() => {
  loadEvent(route.params.id as string);
});

watch(
  () => route.params.id,
  (newId) => {
    loadEvent(newId as string);
  },
);
</script>

<template>
  <div>
    <p v-if="status === 'loading'">Betöltés...</p>
    <p v-else-if="status === 'error'">Hiba történt az oldal betöltésekor</p>
    <div v-else-if="event">
      <h1>{{ event.title }}</h1>
      <p>{{ event.description }}</p>
      <p>{{ event.city }} - {{ event.startsAt }}</p>
      <p>Kapacitás: {{ event.capacity }}</p>
    </div>
  </div>
</template>
