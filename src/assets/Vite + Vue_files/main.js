import { createApp } from '/node_modules/.vite/deps/vue.js?v=acb47b28'
import App from '/src/App.vue'
import router from '/src/router/index.js?t=1666434122315'
import { initializeApp } from "/node_modules/.vite/deps/firebase_app.js?v=acb47b28"
import { getFirestore } from "/node_modules/.vite/deps/firebase_firestore.js?v=acb47b28";
import { createPinia } from '/node_modules/.vite/deps/pinia.js?v=acb47b28'


import { getAuth } from "/node_modules/.vite/deps/firebase_auth.js?v=acb47b28"

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
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  db
}




const pinia = createPinia();

import '/src/style.css?t=1666429014608'

createApp(App).use(router).use(pinia).mount('#app')

