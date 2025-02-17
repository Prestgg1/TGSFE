<template>
    <section id="home" class="relative flex items-center justify-center text-white h-screen w-full">
        <!-- Arka plan resmi -->
        <NuxtImg
            src="/images/home-bg.jpg"
            class="absolute inset-0 w-full h-full object-cover pointer-events-none -z-10"
            alt="Home Background"
            loading="lazy"
        />
        <!-- Siyah degrade overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 -z-10"></div>

        <!-- İçerik -->
        <div class="relative text-center px-6 md:px-12 max-w-4xl">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wide animate-fade-in neon-text">
                WELCOME TO THE GALACTIC SOCIETY
            </h1>
            <p class="text-lg sm:text-2xl lg:text-3xl font-light mt-4 animate-fade-in-delay text-gray-300">
                Build Your Future With Us
            </p>
        </div>
    </section>
</template>

<style>
@keyframes fade-in {
    from {
        transform: translateY(50px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out forwards;
}

.animate-fade-in-delay {
    animation: fade-in 1.2s ease-out forwards;
}

/* Neon efekti */
.neon-text {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6);
}
</style>
