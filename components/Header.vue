<script setup>
const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Team", path: "/#team" },
    { name: "Contact", path: "/#contact" },
    { name: "News", path: "/#news" },
    { name: "Events", path: "/#events" },
];
</script>
<template>
    <header class="bg-header w-full sticky border-white full-center">
        <div class="container flex justify-between items-center">
            <h1 class="text-3xl text-main">TGS</h1>
            <nav class="h-full gap-2 hidden md:flex">
                <ULink
                    v-for="route in routes"
                    :key="route.path"
                    :to="route.path"
                    class="links"
                    active-class="text-primary"
                >
                    {{ route.name }}
                </ULink>
            </nav>
        </div>
    </header>
</template>
<style>
.bg-header {
    height: 5vh;
    background: #191919;
}
@media (width<800) {
    .bg-header {
        height: 15vh;
    }
}
</style>
