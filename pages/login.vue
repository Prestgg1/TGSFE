<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import { API_URLS } from "~/constants/api";

const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.infer<typeof schema>;
const state = reactive({
    email: undefined,
    password: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
    try {
        const response = await $fetch(
            `${API_URLS.BASE_URL}${API_URLS.AUTH.LOGIN}`,
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
            <UFormGroup label="Email" name="email">
                <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Password" name="password">
                <UInput v-model="state.password" type="password" />
            </UFormGroup>

            <UButton type="submit" class="w-full full-center"> Submit </UButton>
        </UForm>
    </div>
</template>
