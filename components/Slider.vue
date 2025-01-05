<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
<<<<<<< HEAD

=======
>>>>>>> 5121bd4 (first commit)
const options = {
    rewind: true,
    gap: "1rem",
    autoplay: true,
    perPage: 4,
<<<<<<< HEAD
    breakpoints: {
        1200: { perPage: 4, gap: "1rem" },
        1000: { perPage: 2, gap: "0.5rem" },
        400: { perPage: 1, gap: 0 },
    },
};

=======
};
>>>>>>> 5121bd4 (first commit)
const images = [
    "/images/slider/1.png",
    "/images/slider/2.png",
    "/images/slider/3.png",
    "/images/slider/4.png",
    "/images/slider/5.png",
];
</script>

<template>
<<<<<<< HEAD
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
=======
    <div class="w-full bg-white full-center">
        <div class="text-black container">
            <Splide :options="options" aria-label="My Favorite Images">
                <SplideSlide v-for="image in images">
                    <NuxtImg :src="image" sizes="250" />
>>>>>>> 5121bd4 (first commit)
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
<<<<<<< HEAD

.splide__slide img {
    height: auto;
    transition: transform 0.3s ease, filter 0.3s ease;
=======
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
>>>>>>> 5121bd4 (first commit)
}
</style>
