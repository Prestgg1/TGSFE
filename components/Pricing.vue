<template>
    <section class="text-white py-16" id="pricing">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold uppercase tracking-wide">Pricing</h2>
            <p class="text-gray-400 mt-2">Meet Our Pricing</p>
        </div>

        <div class="flex justify-center gap-8">
            <UCard
                v-for="(plan, index) in plans"
                :key="index"
                :class="plan.cardClass"
            >
                <h3 class="text-center font-bold text-lg">{{ plan.name }}</h3>
                <p class="text-center text-3xl mt-4">
                    {{ plan.price }}
                    <span class="text-gray-400 text-sm">/ month</span>
                </p>
                <p v-if="plan.description" class="text-center mt-6">
                    {{ plan.description }}
                </p>
                <ul v-else class="mt-4 space-y-2 text-center">
                    <li v-for="(feature, i) in plan.features" :key="i">
                        {{ feature }}
                    </li>
                </ul>
                <div class="text-center mt-6">
                    <UButton :class="plan.buttonClass">{{
                        plan.buttonText
                    }}</UButton>
                </div>
            </UCard>
        </div>
    </section>
</template>

<script setup>
const plans = [
    {
        name: "Standart",
        price: "$3",
        cardClass: "bg-white text-white shadow-md w-80",
        buttonClass: "bg-red-600 hover:bg-red-700 text-white px-4 py-2",
        buttonText: "Buy Now",
        features: [
            "Using All Services",
            "Free Membership Card",
            "3 Free Local Tours",
            "1 Free Movie Night",
            "1 Free Global Tour",
        ],
    },
    {
        name: "Business",
        price: "$$",
        cardClass: "bg-red-600 text-white shadow-md w-80",
        buttonClass: "bg-red-700 hover:bg-red-800 text-white px-4 py-2",
        buttonText: "Coming Soon",
        description: "Coming Soon",
    },
    {
        name: "Developer",
        price: "$$",
        cardClass: "bg-white text-white shadow-md w-80",
        buttonClass: "bg-red-600 hover:bg-red-700 text-white px-4 py-2",
        buttonText: "Coming Soon",
        description: "Coming Soon",
    },
];
</script>
