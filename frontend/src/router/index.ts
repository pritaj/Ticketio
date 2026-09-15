import { createRouter, createWebHistory } from 'vue-router';
import EventListDetailPage from '../pages/EventListDetailPage.vue';
import EventListPage from '../pages/EventListPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/events', component: EventListPage },
    { path: '/events/:id', component: EventListDetailPage },
  ],
});

export default router;
