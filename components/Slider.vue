<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
const options = {
    rewind: true,
    gap: "1rem",
    autoplay: true,
    perPage: 4,
    breakpoints: {
        1200: { perPage: 4, gap: "1rem" },
        1000: { perPage: 2, gap: "0.5rem" },
        400: { perPage: 1, gap: 0 },
    },
};
const images = [
    "/images/slider/1.png",
    "/images/slider/2.png",
    "/images/slider/3.png",
    "/images/slider/4.png",
    "/images/slider/5.png",
];
</script>

<template>
    <div class="w-full bg-white full-center">
        <div class="text-black container">
            <Splide :options="options" aria-label="My Favorite Images">
                <SplideSlide v-for="image in images" class="grayscale hover:grayscale-0 transition-all duration-300">
                    <NuxtImg :src="image" sizes="250" />
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<style>
.splide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.splide__slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
.splide__slide img {
    height: 25%;
}

.embla {
    overflow: hidden;
}
.embla__container {
    display: flex;
}
.embla__slide {
    flex: 0 0 25%;
    background-color: red;
}
</style>
