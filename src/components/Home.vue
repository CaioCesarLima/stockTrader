<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negocie e consulte suas ações</h1>
    <v-sheet color="primary" class="pa-2" :elevation="6">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">Você pode salvar e carregar os dados</span>
    </v-sheet>
    <v-sheet color="success" class="pa-2 mt-3" :elevation="6">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">Clique em "Finalizar Dia" para iniciar um novo dia</span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <p class="display-1">
      <strong>Seu saldo:</strong>
      {{founds}}
    </p>
  </div>
</template>

<script>
export default {

  computed:{
    founds(){
      return this.$store.getters.founds
    }
  }

};
</script>

<style>
</style>