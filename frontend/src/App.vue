<script setup lang="ts">
import { ref, onMounted } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL as string;
const status = ref<'loading' | 'success' | 'error'>('loading');
const health = ref<{ status: string; version: string } | null>(null);

onMounted(async () => {
  try {
    const res = await fetch(`${apiUrl}/api/health`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    health.value = await res.json();
    status.value = 'success';
  } catch (e) {
    status.value = 'error';
  }
});
</script>

<template>
  <main style="font-family: sans-serif; padding: 2rem;">
    <h1>Ticketo</h1>
    <p v-if="status === 'loading'">Betoltes...</p>
    <p v-else-if="status === 'error'">Hiba: nem sikerult elerni a backendet ({{ apiUrl }}).</p>
    <div v-else>
      <p>Backend statusz: <strong>{{ health?.status }}</strong></p>
      <p>Verzio: {{ health?.version }}</p>
    </div>
  </main>
</template>
