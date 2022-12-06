<template>
  <TheHeader></TheHeader>

  <main>
    <Filter></Filter>

    <AllCharacters></AllCharacters>
  </main>
  
  
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Filter from './components/Filter.vue';
import AllCharacters from './components/AllCharacters.vue'

export default {
  components: {TheHeader, Filter, AllCharacters},
  data(){
    return{
      
    }
  }
}

</script>

<style lang="scss">
  @use "./styles/general.scss"
</style>
