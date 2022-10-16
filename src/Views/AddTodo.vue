
<template>
<nav-bar />
  <main class="app">
    <section class="greetings">
      <h1 class="title-todo">
        Hi 
       <span >there!</span>
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
    <div v-for="todo in todos" :class="`todo-item ${toggleDone(todo.id) && 'done'}`" :key="todo.id">
      <label>
        <input type="checkbox" v-model="toggleDone(todo.id)" @click=""/>
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
</template>
<script setup>
import NavBar from "../components/NavBar.vue"
import { onMounted, ref } from "vue"
import { db } from "../main" 
import { collection, query, where, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

const todoColeRef = collection(db, "todos");
const todos = ref([
    {
     
    }
])
onMounted (()=>{
onSnapshot(todoColeRef,(querySnapshot) => {
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
  done: false
})

//     const newTodo = {
//         id: "id1",
//         content: newTodoContent.value,
//         done: false
//     }
    
//    todos.value.unshift(newTodo)
   newTodoContent.value=""
};

const deleteTodo = id =>{
 deleteDoc(doc(todoColeRef, id));
} 

const toggleDone = id => {
    const index = todos.value.findIndex(todo => todo.id === id)

// Set the "capital" field of the city 'DC'
updateDoc( (todoColeRef, id), {
done: !todos.value[index].done

});
} 

</script>
