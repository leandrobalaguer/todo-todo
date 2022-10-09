<template>


<div class="inner-content">
    <div class="home-inner-text">
    <h1 class="title">What´s up today?</h1>
    <h3>Hey! So good to see you again.</h3>
        <p> What´s on your marvellous mind?
            Are you up for a new task? or is it an Action? Maybe a Story? You name it, Buddy. </p> 
            <br>
        <h4> Everything is possible from this point :)</h4>
        </div>
        </div>
        <div class="home-options">
<router-link to="/task"> <button class="home-task">task</button></router-link>
<router-link to="/action"> <button class="home-action">action</button></router-link>
<router-link to="/story"> <button class="home-story">story</button></router-link>

        
    
    </div>
</template>      

<script setup>
import NavBar from "../components/NavBar.vue"
</script>
