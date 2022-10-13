<template>
<nav-bar />
    <main class="app">
        <section class="greetings">
    <h1 class="title">Let´s do
        <span class="is--home-beautiful">this!</span>
    </h1>
    <p class="p-inner">Actions bring us closer to what we want. It is one step further,
        a clearer one. So, tell me more...
        
    </p>
          <h4>Let´s add some actions 👻: {{ message }}</h4>
          <input  type="text" v-model="newNote" @keyup.enter="addNote">
    <div class="note-note">
        <!-- <label for="">Aprender Javascript 👻 </label> -->
      
  
        <ul class="new-note">
            <div class="new-note-title" ></div>
             <div class="new-note-dummi" ></div>
            <li v-for="(note, index) in noteList" :key="note.note + index">
               
                {{ note.note }}
            </li>
        </ul>
  <!-- <textarea class="inner-note" v-model="message" placeholder="Now, lets unfold that great idea..."></textarea> -->
  </div>

</section>

    </main>

</template>  

<script setup>
import NavBar from "../components/NavBar.vue"
import AddTaskView from "../Views/AddTaskView.vue"
import {  ref, inject } from 'vue';



const newNote = ref("")

const noteList = ref ([])

const addNote = () => {
    noteList.value.push({
        note: newNote.value
    })
    newNote.value = ""
};




</script>