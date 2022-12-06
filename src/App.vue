<template>
  <div class="page">
    <TheHeader></TheHeader>

    <main>
      <Filter></Filter>

      <AllCharacters></AllCharacters>
    </main>
  </div>
  
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
  @use "./styles/general.scss";

  .page{
    height: 100vh;
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://insolenzadir2d2.it/wp-content/uploads/2020/06/HD-Wallpapers-Star-Wars-005.jpg");
  }
</style>
