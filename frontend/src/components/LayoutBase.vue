<template>
    <div class="flex flex-col gap-2 relative bg-blue-500">
        <Header />
        <div class="flex-grow min-h-[80vh] mt-44 w-4/5 mx-auto bg-green-500">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
