<template>
    <div class="layout">
        <HeaderComponent />
            <main>
                <slot />
            </main>
        <FooterComponent />
    </div>
    
</template>

<script setup>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';


</script>

<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

</style>