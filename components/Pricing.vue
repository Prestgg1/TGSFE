<template>
    <section class="text-white py-16 bg-gray-900 w-screen" id="pricing">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold uppercase tracking-wide">Pricing</h2>
            <p class="text-gray-400 mt-2">Meet Our Pricing</p>
        </div>

        <div class="flex flex-wrap justify-center gap-8 px-6">
            <div
                v-for="(plan, index) in plans"
                :key="index"
                class="w-80 bg-black text-white shadow-lg p-8 rounded-xl text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                :class="plan.cardClass"
            >
                <!-- Plan Başlığı -->
                <h3 class="font-bold text-xl">{{ plan.name }}</h3>

                <!-- Fiyat Bilgisi -->
                <p class="text-4xl font-semibold mt-4">
                    {{ plan.price }}
                    <span class="text-gray-400 text-sm">/ month</span>
                </p>

                <!-- Açıklama veya Özellikler -->
                <p v-if="plan.description" class="mt-6 text-gray-300">
                    {{ plan.description }}
                </p>
                <ul v-else class="mt-6 space-y-2 text-gray-300">
                    <li v-for="(feature, i) in plan.features" :key="i">
                        ✔ {{ feature }}
                    </li>
                </ul>

                <!-- Buton -->
                <div class="mt-6">
                    <button
                        class="px-6 py-3 text-white font-semibold rounded-full transition duration-300"
                        :class="plan.buttonClass"
                    >
                        {{ plan.buttonText }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const plans = [
    {
        name: "Standard",
        price: "$3",
        cardClass: "border border-red-600",
        buttonClass: "bg-red-600 hover:bg-red-700",
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
        cardClass: "bg-red-600",
        buttonClass: "bg-red-700 hover:bg-red-800",
        buttonText: "Coming Soon",
        description: "Coming Soon",
    },
    {
        name: "Developer",
        price: "$$",
        cardClass: "border border-red-600",
        buttonClass: "bg-red-600 hover:bg-red-700",
        buttonText: "Coming Soon",
        description: "Coming Soon",
    },
];
</script>

<style>
/* Gölgelendirme ve Hover Efektleri */
.shadow-lg {
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
}
</style>
