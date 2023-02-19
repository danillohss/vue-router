<template>
  <div id="produto">
    <h1>Tela Produto</h1>
    <button @click="irHome"> Ir para home </button>
    <br/>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Produto',
  methods:{
    irHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>