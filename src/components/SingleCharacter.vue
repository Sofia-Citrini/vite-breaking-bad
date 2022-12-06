<template>
    <div class="my-card">
        <h3 class="text-color">{{character.name}}</h3>
        <div class="text-secondary">{{character.gender}}</div>
        <div class="text-secondary">{{character.height}}</div>
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
        background-color: #fff;
        padding: $padding-1;
        border-radius: .5rem;

        h3 {
            text-transform: uppercase;
            font-size: medium;
            font-weight: bolder;
        }
    }
</style>