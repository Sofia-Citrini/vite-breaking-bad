<template>
    <section>
        <div class="container p-5">
            <div class="banner">Found {{elements}} characters</div>

            <div class="row my-4 gy-4 gx-3">
                <div class="col-6" v-for="(element, i) in store.characters" :key="i">
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
            axios.get("https://swapi.dev/api/people/")
            .then ((resp) => {
                console.log(resp.data);
                console.log(resp.data.results);

                this.elements = resp.data.count;

                this.store.characters = resp.data.results;
                console.log(this.store.characters)
            })
        }
    }
</script>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

    .container{
        background-color: $color-primary;
        border-radius: .5rem;

        .banner {
            background-color: #fff;
            padding: $padding-1;
            border-radius: .5rem;
            font-weight:500;
            color: $color-primary;
        }
    }
</style>