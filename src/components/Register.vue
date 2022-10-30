<template>
<div id="main">
<div class="comodo">
<div class="wellcome-init">
<h1 class="title"> Welcome!</h1>
<p class="welcome-text">Catch your ideas on the go. Make them grow, turn it into something meaningfull.</p>
   <br>
</div>
</div>
  <div class="desktop">
 <div class="login">
    <form @submit.prevent="Register" class="login_desktop">
        <input class="input-init" type="text" placeholder="your_email@please.com" v-model="email"/>
        <input class="input-init" type="password" placeholder="******" v-model="password"/>
        <p v-if="errMsg">{{ errMsg }}</p>
        <button @click="register" class="btn-init" > <strong> Register! </strong></button>
    </form>
    </div>
    </div>
   </div>
   
</template>

<script setup>

import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"
const email = ref ("");
const password = ref ("");
const router = useRouter();
const errMsg = ref();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) =>{
    console.log("Bien ahi!");
    router.push('/todo')
  })
  .catch((error) => {
    console.log(error.code);
    switch(error.code){
        case "auth/invalid-email":
            errMsg.value = "Oh, c´mon give me something 😐";
            break;
            case "auth/user-not-found":
                errMsg.value ="Mm, have we meet?😳";
                break;
            case "auth/wrong-password":
                errMsg.value = "Mm, sure about the password?🫣";
                break;
            default:
                errMsg.value = "Mm, something went wrong 🫠";
                break;
    }
  });

};

</script>