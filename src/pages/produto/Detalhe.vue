<template>
  <div id="detalhe">
    <h2>Detalhe do produto</h2>
    <span
      >Codigo do Produto: <strong> {{ id }} </strong>
    </span>
    <!-- <router-link :to="`/produto/${id}/editar`">Editar produto {{ id }}</router-link> -->
    <router-link
      :to="{
        name: 'editar',
        params: { id },
        query: { nome: 'Camiseta', qtd: 12 },
      }"
      >Editar produto {{ id }}</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>