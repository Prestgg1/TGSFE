<template>
    <Home />
    <About />
    <Slider />
    <Services />
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
