import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: '/',
      name: 'wellcome',
      component: () => import('../Views/WellcomeView.vue'),
    },
    {
      path: '/home', 
      name: 'home',
      component: () => import('../Views/HomeView.vue')
    },
    {
        path: '/task', 
        name: 'task',
        component: () => import('../Views/AddTaskView.vue')
      },
      {
        path: '/action', 
        name: 'action',
        component: () => import('../Views/AddAction.vue')
      },
      {
        path: '/story', 
        name: 'story',
        component: () => import('../Views/AddStory.vue')
      },
  ];
  
  const router = createRouter({
    history: createWebHistory('/'),
    routes,
  });
  
  export default router;