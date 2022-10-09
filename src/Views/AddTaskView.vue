<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, onMounted, computed, watch } from "vue";
import NavBar from "../components/NavBar.vue"

const todos = ref([]);
const name = ref("");
const input_content = ref("");
const input_category = ref(null);

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
);

const addTodo = () =>{
  if(input_content.value.trim() === "" || input_category.value === null){
    return
  }
  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime()
  })
  input_content.value = ""
  input_category.value = null
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
</script>

<template>
<nav-bar />
  <main class="app">
   
    <section class="greetings">
      <h1 class="title">
        Hello 
        
       <span class="is--home-beautiful">there!</span>
      </h1>
      
    </section>
    
    <section class="create-todo">
      <!-- <h3>Let´s start something!</h3> -->
      <form @submit.prevent="addTodo">
      <h4></h4>
      <input type="text" 
      placeholder="What´s on your mind Buddy?" 
      v-model="input_content" class="todo-item" />
    
    <!-- <h4>Is it?</h4> -->

    <div class="options">

      <label>
         
        <input type="radio" 
        name="category" 
        id="category1"
        value="business"
        v-model="input_category" />
       
       <div>business</div>
      </label>

      <label>
  
        <input type="radio" 
        name="category" 
        id="category2"
        value="personal"
        v-model="input_category" />
        
           <div>personal</div>
      </label>
    </div>
     <input type="submit" value="Let´s do this!" />
    </form>
    </section>
<section class="todo-list">
  <!-- <h3>The List:</h3> -->
  <div class="list">

    <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`" :key="todo.id">
      <label>
        <input type="checkbox" v-model="todo.done" />
        <span :class="`bubble ${todo.category}`"></span>
      </label>
      <div class="todo-content">
        <input type="text" v-model="todo.content" />
      </div>
      <div class="actions">
        <button class="delete" @click="removeTodo(todo)">X</button>
      </div>

    </div>


  </div>
</section>

  </main>
</template>
