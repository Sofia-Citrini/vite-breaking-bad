<template>
    <div class="my-card">
        <h3 class="text-color">{{character.name}}</h3>
        <div class="text"><small>Birth year:</small> {{character.birth_year}}</div>
        <div class="text"><small>Gender:</small> {{character.gender}}</div>
        <div class="text"><small>Height:</small> {{character.height}}</div>
        <div class="text"><small>Mass:</small> {{character.mass}}</div>

        <i :class="iconGender" class="icon"></i>
    </div>
</template>

<script>
    export default {
        props: {
            character:{
                type: Object,
                required: true
            }
        },
        computed: {
            iconGender (){
                let icon = ""

                if (this.character.gender === "female") {
                    icon = "fa-solid fa-person-dress";
                } else if (this.character.gender === "male") {
                    icon = "fa-solid fa-person";
                } else if (this.character.gender === "n/a"){
                    icon = "fa-brands fa-reddit-alien";
                }

                return icon;
            }
        }
    }
</script>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/general.scss';
    .my-card{
        background-color: $color-secondary;
        padding: $padding-1;
        border-radius: .5rem;
        position: relative;

        h3 {
            text-transform: uppercase;
            font-size: medium;
            font-weight: bolder;
        }

        .text{
            color: $color-tertiary;
        }

        .icon {
            color: $color-primary;
            position: absolute;
            top: 1rem;
            right: 1rem;
        }
    }
</style>