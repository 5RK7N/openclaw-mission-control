import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Agents from './views/Agents.vue';
import Boards from './views/Boards.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/agents', component: Agents },
  { path: '/boards', component: Boards },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
