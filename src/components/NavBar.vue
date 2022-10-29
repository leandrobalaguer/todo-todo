 <template>
   <nav>
 

    <router-link to="/"><i class="fa-solid fa-arrow-right-to-bracket" @click="handleSignOut" v-if="isLoggedIn"></i></router-link>
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
  router.push('/')
  });

};
</script>
<style scoped>
.fa-solid{
  cursor: pointer;
  font-size: 2rem;
      color: white;
    margin-bottom: 4rem;
}
</style>
