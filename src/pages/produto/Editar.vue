<template>
  <div id="editar">
    <h2>Editando produto id {{ id }}</h2>
    <span
      >Codigo do Produto: <strong> {{ id }} </strong>
      <br />
    </span>
    <span>
      {{ $route.query.nome }}
    </span>
    <span>
      {{ $route.query.qtd }}
    </span>
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteLeave(to, from, next) {
    const resposta = window.confirm("Are you sure you want to leave?");
    resposta ? next() : next(false);
  },
};
</script>

<style>
</style>