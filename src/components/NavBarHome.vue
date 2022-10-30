<template>
<div class="nav-home">
 <router-link to="/wellcome" class="square_btn">login</router-link>
 <router-link to="/register" class="square_btn"><button class="home-btn-reg">register</button></router-link>
 </div>
</template>

<script setup>
 
</script>

<style scoped>
.nav-home{
        font-family: "SF Pro Text", Helvetica Neue,Helvetica,Arial,sans-serif;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2rem;
        align-items: center;
}
.nav-home a{
    color: black;
    font-weight: 400;
    margin-right: 3rem;
}
.nav-home a:hover{
    color: #0071e3;
    font-weight: 500;
}
 .home-btn-reg{
    cursor: pointer;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    font-size: 18px;
    min-width: 28px;
    padding: 8px 16px;
       border-radius: 8px;
    background: #0071e3;
    color: #fff;
}
.home-btn-reg:hover{
        background: #e160bf;
        text-shadow: 0 2px 4px rgb(0 0 0 / 25%);
}

@media only screen and  (min-width: 410px){
  .nav-home{
    padding-top: 3rem;
  }
}
  @media only screen and (min-width: 810px){
    .nav-home{
              padding-top: 2rem;
        justify-content: center;
}
  }
  @media only screen and  (min-width: 1200px){
    .nav-home{
  justify-content: flex-end;
}
  }
</style>