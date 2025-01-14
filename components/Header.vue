<script setup>
const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Pricing", path: "#pricing" },
    { name: "Team", path: "#team" },
    { name: "Contact", path: "#contact" },
    { name: "News", path: "#news" },
    { name: "Events", path: "#events" },
];
const isOpen = ref(false);
</script>
<template>
    <header class="bg-header p-2 w-full sticky border-white full-center">
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
            <UIcon
                name="material-symbols-light:menu"
                @click="isOpen = true"
                class="w-10 h-10 md:hidden"
            />
            <UModal v-model="isOpen" fullscreen>
                <UCard
                    :ui="{
                        base: 'h-full flex flex-col',
                        rounded: '',
                        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                        body: {
                            base: 'grow',
                        },
                    }"
                >
                    <template #header>
                        <div class="flex items-center justify-between">
                            <h3
                                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                            >
                                TGS
                            </h3>
                            <UButton
                                color="gray"
                                variant="ghost"
                                icon="i-heroicons-x-mark-20-solid"
                                class="-my-1"
                                @click="isOpen = false"
                            />
                        </div>
                    </template>
                    <div class="full-center w-full h-full flex-col gap-2">
                        <ULink
                            v-for="route in routes"
                            :key="route.path"
                            :to="route.path"
                            class="links"
                            active-class="text-primary"
                            @click="isOpen = false"
                        >
                            {{ route.name }}
                        </ULink>
                    </div>
                </UCard>
            </UModal>
        </div>
    </header>
</template>
<style>
.bg-header {
    background: #191919;
}
@media (width<800) {
    .bg-header {
        height: 15vh;
    }
}
</style>
