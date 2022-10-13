import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
import Draggable from 'vuedraggable'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwnCdEJRe5ekWHX31Boy0aD-9gudlIL3w",
  authDomain: "todo-todo-bc747.firebaseapp.com",
  projectId: "todo-todo-bc747",
  storageBucket: "todo-todo-bc747.appspot.com",
  messagingSenderId: "286643079215",
  appId: "1:286643079215:web:0825c0e3e77cbab59b9eda"
};

// Initialize Firebase
initializeApp(firebaseConfig);



import './style.css'

createApp(App).use(router).mount('#app')

