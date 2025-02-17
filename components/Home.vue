<template>
    <section id="homes" class="relative flex items-center justify-center text-white h-screen w-full">
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
        <div class="container text-center px-6 md:px-12 z-[0]">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-slide-in">
                WELCOME TO THE GALACTIC SOCIETY
            </h1>
            <p class="text-lg sm:text-2xl lg:text-3xl animate-slide-in-delay font-light">
                Build Your Future With Us
            </p>
        </div>
    </section>
</template>

<style>
@keyframes slide-in {
    from {
        transform: translateY(30px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
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
