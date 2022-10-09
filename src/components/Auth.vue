<template>
      <div class="login">
    <h3>Let´s Jump in!</h3>
    <form @submit.prevent="Login">
        <input type="text" placeholder="you@allislove.com" v-model="email"/>
        <input type="password" placeholder="*********" v-model="password"/>
        <p v-if="errMsg">{{ errMsg }}</p>
        <button @click="register">Let´s Go!</button>
       <p>New  <router-link to="/register">in town?</router-link></p>
    </form>
   </div>
</template>

<script setup>
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
            errMsg.value = "Invalid Email";
            break;
            case "auth/user-not-found":
                errMsg.value ="Mm, hae we meet?";
                break;
            case "auth/wrong-password":
                errMsg.value = "Mm, sure about the password?";
                break;
            default:
                errMsg.value = "Mm, something went wrong :/";
                break;
    }
  });

};

</script>