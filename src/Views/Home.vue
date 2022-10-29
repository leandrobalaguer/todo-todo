<template>
    <div id="main">   
         <nav-bar-home />
    <div id="container">
        <div class="block1">
            <div class="e1">
                <h1 class="home">To dream,<br>to build,<br>to<span> do!</span>
                </h1>
                    <p class="home-p">This is <strong>todo-todo</strong>,
   a simple and fun way to keep track of your ideas. Let us help
    you put your sh#t togheter and <strong> make things happens.</strong>
   </p> 
            </div>
            <div class="e2">
                <img src="../assets/hero_phone_2.png">
            </div>

        </div>
         <h3 class="ce">This fellows, already <span>trust</span> us:</h3>
        <div class="block3">
         
            <div class="c1">
              <img src="../assets/logo_4.png" class="home-logo" alt="">
            </div>
            <div class="c2">
              <img src="../assets/logo_2.png"  class="home-logo" alt="">
            </div>
            <div class="c1">
              <img src="../assets/logo_3.png" class="home-logo" alt="">
            </div>
            <div class="c2">
              <img src="../assets/logo_1.png" class="home-logo" alt="">
            </div>
        </div>

        <div class="block2">
          <div class="e2-2">
            <h3 class="home-side">All things <span> done</span>, one place.</h3>
            <p class="home-p">
             All your ideas and toughts with you, at any time. <strong>
             Done or undone, is up to you.</strong></p>
        </div>
          <img src="../assets/ipad-ipon-2.png"> 
        </div>
         <h3 class="ce">Ready when <span>you</span>  are ready:</h3>
        <div class="block5">
           <div class="store">
            <img src="../assets/app-store.png" class="logo-store" alt="">
          </div>
          
        
           <div class="sep"></div>
          <div class="chuleo">
            <div class="num"></div>
             <p class="count">+Millions Downloads</p>
          </div>
          <div class="sep"></div>
           
           <div class="store">
            <div class="emoji"></div>
      
          </div>
          
          
         
        
        </div>

    </div>
      
</div>
 <div class="block4">
  <div class="cta">
  <h2 class="home-cta">Get things done, easely.
  </h2>
  <p class="under-cta">
    We build this tool for everybody. It is free. Yep, absolutely free for ever and before. Promisse.🤞 
  </p>
  </div>
  <div class="take-me">
  <router-link to="/register" class="square_btn"><button class="btn-home-landing">register</button></router-link>
 </div>
 </div>
</template>

<script setup>
import NavBarHome from "../components/NavBarHome.vue"
</script>

<style scoped>
@font-face {
  font-family: SF Pro Text,Helvetica Neue,Helvetica,Arial,sans-serif;
  src: local("SF Pro Text"),
  url(./fonts/sf-pro-text_semibold.woff2) format("woff2");
  font-size: 1.6rem;
  }

.home{
    font-family: "SF Pro Text", Helvetica Neue,Helvetica,Arial,sans-serif;
    color: black;
    font-size: 7rem;
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: .9;
    padding-top: 9rem;
}
h2,
.home-cta{
  font-family: "SF Pro Text", Helvetica Neue,Helvetica,Arial,sans-serif;
      font-size: 5rem;
    line-height: .9;
}
#main{
    height: 100%;
    background: white;
}
#container{
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
}

.block1 {
    display: flex;
    width:100%;
    height: 800px;
  }
.under-cta{
  font-family:"SF Pro Text", Helvetica Neue,Helvetica,Arial,sans-serif;
  margin-top: 2rem;
  text-align: center;
  }
.block5{
      display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5rem;
    align-items: center;
    padding: 4rem 0;
}
.sep{
      border-right: 2px solid #a1a1a6;
      height: 120px;
}
.emoji{
  background-image: url(src/assets/emiji.png);
  background-repeat: no-repeat;
  height: 60px;
  width: 90px;
}
.emoji:hover{
   background-image: url(src/assets/emiji-hover.png);
   background-repeat: no-repeat;
  height: 60px;
  width: 90px;

}
.chuleo{
  display: flex;
  align-items: center;
  flex-direction: column;
font-family:"SF Pro Text", Helvetica Neue,Helvetica,Arial,sans-serif;
    padding-right: 44px;
    height: 220px;
        justify-content: center;
}
.count{
    color: #a1a1a6;
    font-size: 21px;
    line-height: 1.1904761905;
    font-weight: 500;
    letter-spacing: .011em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
}
.logo-store{
  padding-left: 4rem;
  padding-top: 1rem;
}
@property --num {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.num {
  font-family:"SF Pro Text", Helvetica Neue,Helvetica,Arial,sans-serif;
  transition: --num 2s;
  counter-set: num var(--num);
  font: 800 80px system-ui;
  color: #a1a1a6;

}
.num::after {
  content: counter(num);
}
.num:hover {
  --num: 100;
 background: -webkit-linear-gradient(38deg,#a979e3 20%,#ef5db2 50%,#ff58c6 80%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.e1{


  }
  .e2{
    width: 50%;
    padding-left: 12%;
   

  }

  .c1{

    height: 300px;
    width: 25%;
  }
  .c2{

    height: 300px;
    width: 25%;
  }
  .block2 {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: nowrap;
    justify-content: left;
    align-items: center;
    margin-left: -78px;
  }
  .home-logo{
    opacity: .4;
    width: 44%;
    margin-left: 3rem;
  }
  .home-logo:hover{
    opacity: 1;
  }
h3,
.home-side{
  color: black;
  font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 4rem;
  text-align: left;
  line-height: .9;
}

h3,
.ce{
  text-align: center;
  font-size: 1.4rem;

}
  .block3{
    display: flex;
    width: 100%;
    height: 40%;
    justify-content: space-between;

  }
  .block4{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 800px;
    background-image: url(src/assets/inner-bg.jpg);
    align-items: center;
    justify-content: center;
    
}
.cta{
  width: 50%;
  text-align: center;
}
.take-me{
  
  margin-top: 3rem;
  
}
.hero{
    width: 100%;
    height: 1400px;
}

span{
 background: -webkit-linear-gradient(38deg,#a979e3 20%,#ef5db2 50%,#ff58c6 80%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
 
}
.home-p{
    color: #a1a1a6;
    font-size: 21px;
    line-height: 1.1904761905;
    font-weight: 500;
    letter-spacing: .011em;
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    width: 80%;
    margin-bottom: 2rem;
    margin-top:3rem;
}

.home-p strong{
    font-weight: bold;
    color: black;
}

 .btn-home-landing{
    cursor: pointer;
    padding: 16% 82%;
    border-radius: .575rem;
    border-style: solid;
    border-width: .125rem;
    font-weight: bold;
}
.btn-home-landing:hover{
  background-color: rgb(255 255 255 / 0.2);

}


 @media only screen and  (min-width: 810px){
  #main{
    overflow-x: hidden;
  }

 }
</style>