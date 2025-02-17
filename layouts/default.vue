<template>
    <div class="flex flex-col min-h-screen justify-center items-center">
        <Header />
        <main class="flex flex-col w-full flex-1 h-full">
            <NuxtPage />
        </main>
        <Footer />
    </div>
</template>

<style>
section {
    scroll-margin-top: 250px;
}
</style>
<script setup>

</script>