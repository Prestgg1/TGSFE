<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { API_URLS } from "~/constants/api";

const schema = z.object({
    name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
    surname: z.string().min(2, "Soyisim en az 2 karakter olmalıdır"),
    email: z.string().email("Geçerli bir email adresi giriniz"),
    phone: z.number().int("Telefon numarası sadece rakam içermelidir"),
    password: z.string().min(8, "Şifre en az 8 karakter olmalıdır"),
});

type Schema = z.infer<typeof schema>;
const state = reactive({
    name: undefined,
    surname: undefined,
    email: undefined,
    phone: undefined,
    password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
        const response = await $fetch(
            `${API_URLS.BASE_URL}${API_URLS.AUTH.REGISTER}`,
            {
                method: "POST",
                body: event.data,
            },
        );
        console.log("API Response:", response);
    } catch (error) {
        console.error("API Error:", error);
    }
}
</script>

<template>
    <div class="full-center w-full flex-1">
        <UForm
            :schema="schema"
            :state="state"
            class="space-y-4 bg-second p-5 w-1/4 rounded-xl flex-col"
            @submit="onSubmit"
        >
            <UFormGroup label="Name" name="name">
                <UInput v-model="state.name" />
            </UFormGroup>

            <UFormGroup label="Surname" name="surname">
                <UInput v-model="state.surname" />
            </UFormGroup>

            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" type="email" />
            </UFormGroup>

            <UFormGroup label="Phone" name="phone">
                <UInput v-model="state.phone" type="number" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
                <UInput v-model="state.password" type="password" />
            </UFormGroup>

            <UButton type="submit" class="w-full full-center"> 
                Kayıt Ol 
            </UButton>
        </UForm>
    </div>
</template>
