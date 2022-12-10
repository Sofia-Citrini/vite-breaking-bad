<template>
    <section class="py-3">
        <div class="container">
            <input type="text" v-model="filterGender" @keyup.enter="onGenderClick"
            placeholder="Inserisci nome personaggio">
            <!-- <select class="my-select" v-model="store.selectGender" @click="onGenderClick">
                <option disabled value="">Selected Gender</option>
                <option value="male">Male</option>
                <option value="Female">Female</option>
                <option value="n/a">n/a</option>
            </select> -->
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
.my-select {
    width:auto;
    padding: .5rem;
    border-radius: .5rem;
    border: 1px solid $color-primary;
    background-color: transparent;
    color: $color-primary;
}
</style>