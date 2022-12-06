<template>
  <TheHeader></TheHeader>

  <Filter></Filter>

  
  
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Filter from './components/Filter.vue'

export default {
  components: {TheHeader, Filter},
  data(){
    return{
      
    }
  }
}

</script>

<style lang="scss">
  @use "./styles/general.scss"
</style>
