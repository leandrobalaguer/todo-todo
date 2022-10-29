import { createStore } from "vuex"
import router from "../router"
import  { auth } from "../firebase"
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
    } from "../firebase/auth"

    const wrapper = mount(App, { global: { provide: { [storeKey as symbol]: mockStore } } });

export default createStore ({
    state: {
        user: null
    },
    mutations: {
        SET_USER (state, user){
            state.user = user
        },
        CLEAR_USER (state){
            state.user = null
        }
    },
    actions: {
        async login ({ commit }, details){
            const { email, password } = details
            try{
                await signInWithEmailAndPassword(auth, email, password )
            } catch(error){
                switch(error.code){
                    case "auth/user-not-found":
                        alert("User not found!")
                        break
                    case "auth/wrong-password":
                        alert("Mm, not that password")
                        break
                        default:
                            alert("Mm, something went wrong :/")
                }
                return
            }
            commit ("SET_USER", auth.currentUser)
            router.push("/")
        },


        async register ({ commit }, details){
            const { email, password } = details
            try{
                await createUserWithEmailAndPassword(auth, email, password )
            } catch(error){
                switch(error.code){
                    case "auth/email-already-in-use":
                        alert("That email is registered")
                        break
                    case "auth/invalid-email":
                        alert("Nope, that wont work!")
                        break
                        default:
                            alert("Mm, something went wrong :/")
                }
                return
            }
            commit ("SET_USER", auth.currentUser)

            router.push("/todo")
            
        },
        logout ( { commit }){
            signOut(auth)

            commit ("CLEAR_USER")

            router.push ("/home")
        },

        fetchUser ({ commit }){
            auth.onAuthStateChanged(async user =>{
                    if(user === null ){
                    commit("CLEAR_USER")
                    } else{
                        commit("SET_USER", user)
                        if(router.isReady() && router.currentRoute.value.path === "/"){
                            router.push("/todo")
                        }

                    }

            })
        }
    }
})