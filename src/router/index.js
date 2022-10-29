import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth"

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../Views/Home.vue'),
  },
    {
      path: '/wellcome',
      name: 'wellcome',
      component: () => import('../Views/WellcomeView.vue'),
    },
    {
      path: '/register', 
      name: 'register',
      component: () => import('../Views/WellcomeViewRegister.vue'),
    },
      {
        path: '/todo', 
        name: 'todo',
        component: () => import('../Views/TodoApp.vue'),
        meta:{
          requiresAuth : true
        }
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