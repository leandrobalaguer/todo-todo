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
               
     <router-link to="/register" class="square_btn"><button class="btn-home-landing">register!</button></router-link>
            </div>
            <div class="e2">
                <img src="../assets/hero_phone_2.png">
            </div>

        </div>
        
        <div class="block2">
          <img src="../assets/hero_phone_1.png">
          <div class="e2">
            <p class="home-p">ioioooiooioioioioioioioioioioioio</p>
        </div>
               
        </div>
        
        <div class="block3">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c1"></div>
            <div class="c2"></div>
        </div>
        <div class="block4"></div>
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



h1,
.home{
    font-family: "SF Pro Text", Helvetica Neue,Helvetica,Arial,sans-serif;
    color: black;
    font-size: 8rem;
    font-weight: 800;
    margin-bottom: 1rem;
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
  
.e1{


  }
  .e2{

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
    width: 100%;  /* Or whatever */

    height: 800px;
  }

  .block3{
    display: flex;
    width: 100%;
    height: 40%;

  }
  .block4{
    display: flex;
    width: 100%;
    height: 40%;

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
    color: black;
    font-size: 1.2rem;
    letter-spacing: .2px;
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
    padding: 1% 2%;
    border-radius: .575rem;
    border-style: solid;
    border-width: .125rem;
    color:#a979e3;
    position: absolute;
    font-weight: bold;

    border-bottom: .125rem solid #a979e3;

}
 .features{
 
 }
 .trustee{

    background-color: white;

 }

 .trustee img{
   
 }
</style>