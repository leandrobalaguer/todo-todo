 <template>
<h2> Login</h2>
    <form @submit.prevent="Login">
        <input type="text" placeholder="May I ask an email?" class="todo-item"/>
        <input type="password" placeholder="And a paswoord too"/>
        <input type="submit" value="Login">
        </form>    
 </template>
 