<template >

   <section >
      <h1 class="title-home">
        What´s up
       <span >today!</span>
      </h1>
    </section>

<div class="card-options">
                    <router-link to="/task"><div class="container"><div class="box">
                     <i class="fa-solid fa-o"></i>
                      <h2 class="home-view">New Task</h2><div> </div>
                      
                    </div></div></router-link>
                    
                    <router-link to="/action"><div class="container"><div class="box">
                      <i class="fa-solid fa-bullseye"></i>
                      <h2 class="home-view">New Action</h2><div> </div>
                    </div></div></router-link>

                    <router-link to="/story"><div class="container"><div class="box">
                      <i class="fa-solid fa-circle"></i>
                      <h2 class="home-view">New Story</h2><div> </div>
                    </div></div></router-link>
</div>  

</template>      

<script setup>
import NavBar from "../components/NavBar.vue"




</script>

<style scoped>
.home-view{
  font-weight: 100;
}
.fa-regular,
.fa-solid,
 .far{
  font-size: 130px;
  padding-top: 12px;
}
.card-options{
  display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0 auto;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    margin-top: 18%;
}
.container {
  font-family: sans-serif;
}

.container::before, .container::after {
  content: "";
  background-color: #fab5704c;
  position: absolute;
}

.container .box {
  width: 11.875em;
  height: 15.875em;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: .7rem;
  transition: all ease .3s;
}

.container .box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container .box .titlec {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: .1em
}

.container .box div strong {
  display: block;
  margin-bottom: .5rem;
}

.container .box div p {
  margin: 0;
  font-size: .9em;
  font-weight: 300;
  letter-spacing: .1em;
}

.container .box div span {
  font-size: .7rem;
  font-weight: 300;
}

.container .box div span:nth-child(3) {
  font-weight: 500;
  margin-right: .2rem;
}

.container .box:hover {
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
</style>