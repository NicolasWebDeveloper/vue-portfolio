import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './components/pages/Home/HomePage.vue';
import ProjectsPage from './components/pages/Projects/ProjectsPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
  ],
});

export default router;
