<template>
  <nav id="header">
      <h1>Sujeito Programador</h1>
      <ul>
          <li>
               <router-link to="/" tag="li">Home</router-link>
          </li>
          <li>
               <router-link to="/produto" >Produto</router-link>
          </li>
      </ul>
  </nav> 
</template>

<script>
export default {

   name: 'Header'
}
</script>

<style scoped>
    #header{
       display: flex;
       justify-content: space-around;
   }
   
   ul{
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       list-style: none;
       padding: 0;
   }

   ul li{
       background: brown;
       margin: 3px;
       padding: 3px 10px;
       border-radius: 5px;
   }

   a{
       color: #FFF;
       text-decoration: none;
       margin-left: 5px;
       font-size: 25px;
   }
</style>