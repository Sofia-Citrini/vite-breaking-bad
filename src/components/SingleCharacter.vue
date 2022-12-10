<template>
    <div class="my-card">
        <h3 class="text-color">{{character.name}}</h3>
        <div class="text"><small>Birth year:</small> {{character.birth_year}}</div>
        <div class="text"><small>Gender:</small> {{character.gender}}</div>
        <div class="text"><small>Height:</small> {{character.height}}</div>
        <div class="text"><small>mass:</small> {{character.mass}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            character:{
                type: Object,
                required: true
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

        h3 {
            text-transform: uppercase;
            font-size: medium;
            font-weight: bolder;
        }

        .text{
            color: $color-tertiary;
        }
    }
</style>