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
    <div class="w-full bg-white flex justify-center py-10">
        <div class="container">
            <Splide :options="options" aria-label="Image Slider">
                <SplideSlide
                    v-for="image in images"
                    :key="image"
                    class="relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                    <NuxtImg
                        :src="image"
                        class="md:max-w-1/2 max-w-1/2 duration-500 transition-transform transform hover:scale-115 rounded-lg "
                        alt="Slider Image"
                    />
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
    height: auto;
    transition: transform 0.3s ease, filter 0.3s ease;
}
</style>
