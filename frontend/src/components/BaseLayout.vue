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
    width: 100%;
}

main {
    width: 100%;
}

</style>