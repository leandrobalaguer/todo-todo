
<template>
<nav-bar />
  <main class="app">

      
    <section class="greetings">
      <h1 class="title-todo">
        Hello 
       <span class="is--home-beautiful">there!</span>
      </h1>
    </section>

    <section class="create-todo">
      <!-- <h3>Let´s start something!</h3> -->
      <form @submit.prevent="addTodo">
     
      <input type="text" 
      placeholder="What´s on your mind Buddy?" 
      v-model="input_content" class="todo-item" />
    
     <input type="submit" value="Let´s do this!" />
    </form>
    </section>
  
        <div class="desktop-todo">
<section class="todo-list">
  <div class="list">
    <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`" :key="todo.id">
      <label>
        <input type="checkbox" v-model="todo.done" />
      </label>
      <div class="todo-content">
        <input type="text" v-model="todo.content" message="todo.content" />
      </div>
      <div class="actions">
        <button class="delete" @click="removeTodo(todo)">X</button>
      </div>
    </div>
  </div>
</section>
  </div>
  </main>
</template>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, onMounted, computed, watch, provide } from "vue";
import NavBar from "../components/NavBar.vue";



const todos = ref([]);
const name = ref("");
const input_content = ref("");

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
);

const addTodo = () =>{
  if(input_content.value.trim() === "" ){
    return
  }
  todos.value.push({
    content: input_content.value,

    done: false,
    createdAt: new Date().getTime()
  })
  input_content.value = ""

}

const removeTodo = todo =>{
  todos.value = todos.value.filter(t => t !== todo)
} 

watch(todos, (newVal) => {
  localStorage.setItem("todos", JSON.stringify(newVal))
}, { deep: true })


watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
})
onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || []
});


provide( "message", todos);
</script>
