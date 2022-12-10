<template>
    <section class="py-3">
        <div class="container">
            <div class="text">Cerca il personaggio che desideri:</div>
            <input type="text" v-model="filterGender" @keyup.enter="onGenderClick"
            placeholder="Inserisci nome" class="my-input">
        </div>
    </section>
</template>

<script>
import {store} from "../store";
    export default {
        data(){
            return{
                store,
                filterGender:""
            }
        },
        methods:{
            onGenderClick(){
                this.$emit("clickGender", this.filterGender);

                this.filterGender = "";
            }
        }
    }

</script>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
.text{
    padding: .5rem 0;
    color: $color-secondary;
}
.my-input {
    width:auto;
    padding: .5rem;
    border-radius: .5rem;
    border: 1px solid $color-primary;
    background-color: transparent;
    color: $color-primary;
}
</style>