 <template>
   <nav>
  <!-- <img src="../assets/website-state-feedback.png"> -->
    <router-link to="/todo"> NewTodo </router-link>
    <router-link to="/task"> Task </router-link>
    <router-link to="/action"> Action </router-link>
    <router-link to="/story"> Story </router-link>
    <i class="fa-solid fa-arrow-right-to-bracket" @click="handleSignOut" v-if="isLoggedIn"></i>
      <!-- <button @click="handleSignOut" v-if="isLoggedIn" class="bye">Bye!</button> -->

    </nav>

 </template>
 <script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createRouter, useRouter } from "vue-router";

const router = ref();

const isLoggedIn = ref(false);


let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) =>{
    if(user){
      isLoggedIn.value = true;
    }else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(()=>{
   router.value("/");
  });

};
</script>
<style scoped>
.fa-solid{
  cursor: pointer;
}
</style>
