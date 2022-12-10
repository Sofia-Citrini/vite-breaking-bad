<template>
    <section>
        <div class="container py-3">
            <div class="banner">Found {{store.elements}} characters</div>

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
    import {store, fetchCharactersList} from '../store'

    export default {
        components:{SingleCharacter},
        data(){
            return{
                store
            }
        },
        created(){
            fetchCharactersList()
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