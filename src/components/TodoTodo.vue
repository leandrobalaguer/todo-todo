
<template>
<div id="main">
<nav-bar />
  <main class="app">
    <section class="greetings">
      <h1 class="title-todo">
        Hi 
       <span class="is--home-beautiful" >there!</span>

 
      </h1>
    </section>
    <section class="create-todo">
      <!-- <h3>Let´s start something!</h3> -->
      <form @submit.prevent="addTodo">
     
      <input type="text" 
      placeholder="What´s on your mind Buddy?" 
      v-model="newTodoContent" class="todo-item" />
    
     <input type="submit" value="Hit it!" />
  
    </form>
    </section>
  
<div class="desktop-todo">
<section class="todo-list">


  <div class="list">

    <div v-for="todo in todos" 
    :class="`todo-item ${todo.done && 'done'}`" 
    :key="todo.id"
    :list="todos"
   >
    
      <label>
        <input type="checkbox" v-model="todo.done" @change="toggleDone(todo.id)"/>
      </label>
      <div class="todo-content">
        
        <input type="text" v-model="todo.content" message="todo.content" />
      </div>
      <div class="actions">
        <button class="delete" @click="deleteTodo(todo.id)">X</button>
      </div>
    </div>

  </div>

</section>
  </div>
  </main>
  </div>
</template>
<script setup>

import NavBar from "./NavBar.vue"
import { onMounted, ref } from "vue"
import { db } from "../main" 
import { collection, query, 
onSnapshot, addDoc, 
deleteDoc, doc, 
updateDoc, orderBy, limit } from "firebase/firestore";


const todoColeRef = collection(db, "todos")
const todoColeQuery = query(todoColeRef, orderBy("date", "desc"))

const todos = ref([
    {
     
    } 
])
onMounted (()=>{
onSnapshot(todoColeQuery ,(querySnapshot) => {
  const fbTodos  = []
  querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      fbTodos.push(todo)
  })
    todos.value = fbTodos
})
})


const newTodoContent = ref("")

const addTodo = () => {
 if(newTodoContent.value.trim() === "" ){
    return
  }
    addDoc(todoColeRef , {
  content: newTodoContent.value,
  done: false,
  date: Date.now()
})

   newTodoContent.value=""
};

const deleteTodo = id =>{
 deleteDoc(doc(todoColeRef, id));
} 

// const toggleDone = () =>{
//     if (event.target.checked) console.log("Check")
//     else console.log( "unc")
// }

const toggleDone = id => {
    const index = todos.value.findIndex(todo => todo.id === id)
    console.log(todos.value[index].done)
    updateDoc(doc(todoColeRef, id), {
  done: !todos.value[index].done 
})
};

</script>
