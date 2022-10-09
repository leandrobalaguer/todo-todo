import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
    {
      path: '/',
      name: 'wellcome',
      component: () => import('../Views/WellcomeView.vue'),
    },
    {
      path: '/home', 
      name: 'home',
      component: () => import('../Views/HomeView.vue'),
      meta:{
        requiresAuth : true
      }
    },
    {
      path: '/register', 
      name: 'register',
      component: () => import('../Views/WellcomeViewRegister.vue'),
    },
    {
        path: '/task', 
        name: 'task',
        component: () => import('../Views/AddTaskView.vue'),
        meta:{
          requiresAuth : true
        }
      },
      {
        path: '/action', 
        name: 'action',
        component: () => import('../Views/AddAction.vue'),
        meta:{
          requiresAuth : true
        }
      },
      {
        path: '/story', 
        name: 'story',
        component: () => import('../Views/AddStory.vue'),
        meta:{
          requiresAuth : true
        }
      },
      {
        path: '/seeya',
        name: 'seeya',
        component: () => import('../Views/SeeYa.vue'),
      },
  ];
  
  const router = createRouter({
    history: createWebHistory('/'),
    routes,
  });
  
  const getCurrentUser = () => {
    return new Promise ((resolve, reject) =>{
      const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user)
        },
        reject
      );
    });
  };

  router.beforeEach( async (to, from, next) =>{
    if(to.matched.some((record)=> record.meta.requiresAuth)){
      if(await getCurrentUser()){
        next();
      } else{
        next("/");
      }
      } else {
      next();
    }
  });

  export default router;