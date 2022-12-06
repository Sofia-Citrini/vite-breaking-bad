<template>
    <div class="loader-container">
        <h1>Loading</h1>
        <div class="loader"></div>
    </div>
</template>

<script></script>

<style scoped lang="scss">
@use "../styles/partials/variables" as *;
    .loader-container {
        background-color: $color-secondary;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 10rem;
        width: 100%;
        height: 80%;

        .loader {
            border: 10px solid $color-tertiary;
            border-radius: 50%;
            border-top: 10px solid $color-primary;
            width: 5rem;
            height: 5rem;
            animation: spin 2s linear infinite;
        }

        @keyframes spin {
            0% { 
                transform: rotate(0deg); 
            }
            100% { 
                transform: rotate(360deg); 
            }
        }
    }
    
</style>