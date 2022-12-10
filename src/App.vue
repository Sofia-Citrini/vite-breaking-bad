<template>
  <div class="page">
    <TheHeader></TheHeader>

    <main>
      <Filter @enterName="onSelect"></Filter>

      <AllCharacters></AllCharacters>
      <TheLoader v-if="store.loading"></TheLoader>
    </main>
  </div>
  
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Filter from './components/Filter.vue';
import AllCharacters from './components/AllCharacters.vue';
import TheLoader from './components/TheLoader.vue';
import {store, fetchCharactersList} from './store'

export default {
  components: {TheHeader, Filter, AllCharacters, TheLoader},
  data(){
    return{
      store
    }
  },
  methods: {
    onSelect(selectedItem){
      this.store.selectName = selectedItem;
      console.log (selectedItem);

      fetchCharactersList();
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
