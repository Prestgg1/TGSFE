<template>
    <section id="home" class="relative full-center text-white h-screen w-full">
        <!-- Arka plan resmi -->
        <NuxtImg
            src="/images/home-bg.jpg"
            class="absolute inset-0 w-full h-full pointer-events-none object-cover -z-10"
            alt="Home Background"
            loading="lazy"
        />
        <!-- Siyah ton overlay -->
        <div class="absolute inset-0 bg-black/75 -z-10"></div>

        <!-- İçerik -->
        <div class="content container text-center md:text-start px-4 z-10">
            <h1 class="text-5xl font-bold mb-4 animate-slide-in">
                WELCOME TO THE GALACTIC SOCIETY
            </h1>
            <p
                class="text-2xl animate-slide-in-delay"
                style="font-family: Raleway, sans-serif"
            >
                Build Your Future With Us
            </p>
        </div>
    </section>
</template>
<style>
@keyframes slide-in {
    from {
        transform: translateX(-50px);
        opacity: 0;
    }
    to {
        transform: translateX(0px);
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
