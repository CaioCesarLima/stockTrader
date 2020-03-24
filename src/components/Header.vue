<template>
  <v-toolbar>
    <v-toolbar-title class="headline text-uppercasemr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portfólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar dia</v-btn>
      <v-menu offset-y>
        <v-btn slot="activator" flat>Salvar e carregar</v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppecase grey--text text-darken-2">
          Saldo: {{ founds | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'
export default {

  computed:{
    founds(){
      return this.$store.getters.founds
    }
  },
  methods:{
    ...mapActions(['randomizeStock']),
    endDay(){
      
      this.$store.dispatch('randomizeStock')
    },
    saveData(){
      const {founds, stockPortfolio, stocks} = this.$store.getters
      this.$http.put('data.json',{
        founds, stockPortfolio, stocks
      })
    }
  }

};
</script>

<style>
</style>