<template>
<nav-bar />
    <main class="app">
        <section class="greetings-actions">

    <div class="desktop-actions">
    <h1 class="title-todo"><span class="title-action">Let´s
          {{ useTodo.name }}
        </span> 
        <br>Do it!
        
    </h1>
    <p class="hidden">Actions bring us closer to what we want. It is one step further,
        a clearer one. So,x tell me more...
    </p>
    <div class="create-action">
          <input class="input-inner" type="text" v-model="newNote" @keyup.enter="addNote" placeholder="Let´s rock the boat...">

    </div>
          </div>
    <div class="note-note">
        <!-- <label for="">Aprender Javascript 👻 </label> -->

        <ul class="new-note">
            <div class="new-note-title" >
                
            </div>
             <div class="new-note-dummi" ></div>
            <li v-for="(note, index) in noteList" :key="note.note + index">
               
                {{ note.note }}
            </li>
        </ul>

  </div>

</section>

    </main>

</template>  

<script setup>
import NavBar from "../components/NavBar.vue"

import  { useTodos } from "../store/TodoStore"
import { ref } from "vue"

const useTodo = useTodos()



const newNote = ref("")

const noteList = ref ([])

const addNote = () => {
    noteList.value.push({
        note: newNote.value
    })
    newNote.value = ""
};

</script>
<style scoped>
/* From uiverse.io by @G4b413l */
.group {
 position: relative;
}

.input {
 font-size: 16px;
 padding: 10px 10px 10px 5px;
 display: block;
 width: 200px;
 border: none;
 border-bottom: 1px solid #515151;
 background: transparent;
}

.input:focus {
 outline: none;
}

label {
 color: #999;
 font-size: 18px;
 font-weight: normal;
 position: absolute;
 pointer-events: none;
 left: 5px;
 top: 10px;
 transition: 0.2s ease all;
 -moz-transition: 0.2s ease all;
 -webkit-transition: 0.2s ease all;
}

.input:focus ~ label, .input:valid ~ label {
 top: -20px;
 font-size: 14px;
 color: #5264AE;
}

.bar {
 position: relative;
 display: block;
 width: 200px;
}



.bar:before {
 left: 50%;
}

.bar:after {
 right: 50%;
}

.input:focus ~ .bar:before, .input:focus ~ .bar:after {
 width: 50%;
}

.highlight {
 position: absolute;
 height: 60%;
 width: 100px;
 top: 25%;
 left: 0;
 pointer-events: none;
 opacity: 0.5;
}

.input:focus ~ .highlight {
 animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
 from {
  background: #5264AE;
 }

 to {
  width: 0;
  background: transparent;
 }
}
</style>