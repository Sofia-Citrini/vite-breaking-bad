<template>
    <section>
        <div class="container py-3">
            <div class="banner">Found {{elements}} characters</div>

            <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 my-4 gy-4 gx-3">
                <div class="col" v-for="(element, i) in store.characters" :key="i">
                    <SingleCharacter :character="element"></SingleCharacter>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import SingleCharacter from './SingleCharacter.vue';
    import axios from 'axios';
    import {store} from '../store'

    export default {
        components:{SingleCharacter},
        data(){
            return{
                elements:"",
                store
            }
        },
        created(){
            this.store.loading  = true;

            axios.get("https://swapi.dev/api/people/")
            .then ((resp) => {
                console.log(resp.data);
                console.log(resp.data.results);
                this.elements = resp.data.count;

                this.store.characters = resp.data.results;
                console.log(this.store.characters)

                // this.store.loading = false;

                setTimeout(() => {
                this.store.loading = false;
                }, 3000);
            })
            .catch ((error) => {
                alert("l'operazione non é andata a buon fine");
                this.store.loading = false;
            })
        }
    }
</script>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

    .container{
        border-radius: .5rem;

        .banner {
            padding: $padding-1;
            border-radius: .5rem;
            font-weight:500;
            color: $color-primary;
        }
    }
</style>