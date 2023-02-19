<template>
  <div id="app">
    <Header />
    <h1>Aprendendo rotas</h1>
  </div>
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>

<style scoped>
</style>
