<template>
  
      <div class="login">
    <h3>Let´s create an account:</h3>
    <form @submit.prevent="Register">
        <input class="input-init" type="text" placeholder="you@allislove.com" v-model="email"/>
        <input class="input-init" type="password" placeholder="******" v-model="password"/>
        <button @click="register" class="btn-init" > <strong> Good to Go! </strong></button>
       
    </form>
   </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router"
const email = ref ("");
const password = ref ("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  .then((data) =>{
    console.log("YEY");
    router.push('/home')
  })
  .catch((error) => {
    console.log(error.code);
 
  })

};

</script>