<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getEvents } from '../api/http';
import { Event } from '../types/Event';

type Status = 'loading' | 'success' | 'error' | 'empty';

const status = ref<Status>('loading');
const events = ref<Event[]>([]);

onMounted(async () => {
  status.value = 'loading';
  try {
    const data = await getEvents();
    events.value = data;
    status.value = data.length === 0 ? 'empty' : 'success';
  } catch (e) {
    status.value = 'error';
  }
});
</script>

<template>
  <div>
    <p v-if="status === 'loading'">Betöltés...</p>
    <p v-else-if="status === 'error'">Hiba történt a betöltésekor</p>
    <p v-else-if="status === 'empty'">Nincs még Esemény.</p>
    <ul v-else>
      <li v-for="event in events" :key="event.id">
        <router-link :to="`/events/${event.id}`">{{ event.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
