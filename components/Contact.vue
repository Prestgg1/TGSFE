<template>
    <section class="text-white py-10" id="contact">
        <!-- Başlık -->
        <div class="text-center mb-10">
            <h2 class="text-4xl font-bold">CONTACT</h2>
            <p class="text-lg mt-2">Contact With Us Easy!</p>
        </div>

        <!-- Üst Bilgi -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
            <!-- Adres -->
            <div>
                <div class="flex justify-center items-center mb-4">
                    <UIcon
                        name="i-heroicons-map-pin"
                        class="w-10 h-10 text-red-500"
                    />
                </div>
                <h3 class="text-xl font-semibold">Our Address</h3>
                <p class="mt-2">Azerbaijan, Baku</p>
            </div>

            <!-- Email -->
            <div>
                <div class="flex justify-center items-center mb-4">
                    <UIcon
                        name="i-heroicons-envelope"
                        class="w-10 h-10 text-red-500"
                    />
                </div>
                <h3 class="text-xl font-semibold">Email Us</h3>
                <p class="mt-2">thegalacticsociety1@gmail.com</p>
            </div>

            <!-- Telefon -->
            <div>
                <div class="flex justify-center items-center mb-4">
                    <UIcon
                        name="i-heroicons-phone"
                        class="w-10 h-10 text-red-500"
                    />
                </div>
                <h3 class="text-xl font-semibold">Call Us</h3>
                <p class="mt-2">+1 5589 55488 55</p>
            </div>
        </div>

        <!-- Harita ve Form -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Harita -->
            <div>
                <iframe
                    class="w-full h-80"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.5690037514267!2d49.86709261572619!3d40.40926106515225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063abed8fae99%3A0x8b7c2c2a67b3b2e0!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1679418412312!5m2!1sen!2s"
                    loading="lazy"
                ></iframe>
            </div>

            <!-- Form -->
            <div>
                <form>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <UInput
                            color="primary"
                            variant="outline"
                            placeholder="Your Name"
                        />
                        <UInput
                            color="primary"
                            variant="outline"
                            placeholder="Your Email"
                        />
                    </div>
                    <div class="mb-4">
                        <UInput
                            color="primary"
                            variant="outline"
                            placeholder="Subject"
                            class="w-full"
                        />
                    </div>
                    <div class="mb-4">
                        <UTextarea placeholder="Message" color="primary" />
                    </div>
                    <button
                        type="submit"
                        class="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>
<script setup></script>
