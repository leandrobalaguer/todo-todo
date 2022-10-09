 <template>
    <nav>
    <router-link to="/home"> Home </router-link>
    <router-link to="/task"> Task </router-link>
    <router-link to="/action"> Action </router-link>
    <router-link to="/story"> Story </router-link>
        <button @click="handleSignOut" v-if="isLoggedIn">ByBye!</button>

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

const handleSignOut = () =>{
  signOut(auth).then(()=>{
   router.value("/seeya");
  });

};

    
</script>
