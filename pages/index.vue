<template>
    <Home data-aos="fade-up" />
    <About data-aos="fade-up" />
    <Slider data-aos="fade-up" />
    <div class="w-full h-full full-center bg-second">
        <div class="container">
            <Services data-aos="fade-up" />
            <Pricing />
            <Teams data-aos="fade-up" />
            <Contact data-aos="fade-up" />
        </div>
    </div>
</template>

<style>
html,
body,
#__nuxt {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
}

#home {
    position: relative;
    overflow: hidden;
}

main *::selection {
    background-color: rgba(255, 255, 255, 0.3);
    color: #000;
}
</style>
<script setup>
definePageMeta({
    middleware: ['auth']
})
</script>