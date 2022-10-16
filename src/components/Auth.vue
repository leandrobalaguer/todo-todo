<template>
    <inner-texts />
<div class="desktop">
      <div class="login">
    <h3 class="hidden">I´m in!</h3>
    <form @submit.prevent="Login" class="login_desktop">
        <input class="input-init" type="text" placeholder="it´ssogoodto@seeyoouagain.com" v-model="email"/>
        <input class="input-init" type="current-password" placeholder="*********" v-model="password"/>
        <p v-if="errMsg">{{ errMsg }}</p>
        <button @click="register" class="btn-init"><strong> Login! </strong></button>
       <p> New  <router-link to="/register">in town?</router-link>👽</p>
    </form>
   </div>
   </div>
</template>

<script setup>
 import InnerTexts from "../components/InnerTexts.vue"
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"
const email = ref ("");
const password = ref ("");
const errMsg = ref();
const router = useRouter();

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) =>{
    console.log("YEY");
    router.push('/home')
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