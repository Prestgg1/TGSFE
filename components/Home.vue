<template>
<<<<<<< HEAD
    <section id="homes" class="relative flex items-center justify-center text-white h-screen w-full">
        <!-- Arka plan resmi -->
        <NuxtImg
=======
    <section id="home" class="relative full-center text-white h-screen w-full">
        <!-- Arka plan resmi -->
<<<<<<< HEAD
        <nuxt-img
>>>>>>> 5121bd4 (first commit)
=======
        <NuxtImg
>>>>>>> 012726b (Api Inteqrated)
            src="/images/home-bg.jpg"
            class="absolute inset-0 w-full h-full pointer-events-none object-cover -z-10"
            alt="Home Background"
            loading="lazy"
        />
        <!-- Siyah ton overlay -->
        <div class="absolute inset-0 bg-black/75 -z-10"></div>

        <!-- İçerik -->
<<<<<<< HEAD
        <div class="container text-center px-6 md:px-12 z-[0]">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-slide-in">
                WELCOME TO THE GALACTIC SOCIETY
            </h1>
            <p class="text-lg sm:text-2xl lg:text-3xl animate-slide-in-delay font-light">
=======
        <div class="content container text-center md:text-start px-4 z-10">
            <h1 class="text-5xl font-bold mb-4 animate-slide-in">
                WELCOME TO THE GALACTIC SOCIETY
            </h1>
            <p
                class="text-2xl animate-slide-in-delay"
                style="font-family: Raleway, sans-serif"
            >
>>>>>>> 5121bd4 (first commit)
                Build Your Future With Us
            </p>
        </div>
    </section>
</template>
<<<<<<< HEAD

<style>
@keyframes slide-in {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
=======
<style>
@keyframes slide-in {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }
    to {
        transform: translateX(0px);
>>>>>>> 5121bd4 (first commit)
        opacity: 1;
    }
}

.animate-slide-in {
    animation: slide-in 1s ease-out forwards;
}

.animate-slide-in-delay {
    animation: slide-in 1.2s ease-out forwards;
}
</style>
