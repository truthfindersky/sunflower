<script setup>

import TextInput from "@/Components/TextInput.vue";

//form helper
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

//submit
const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Login" />

    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2">
                    <img aria-hidden="true" class="object-cover w-full h-full dark:hidden" :src="'storage/website/login.jpg'" alt="Login" />
                    <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block" :src="'storage/website/login.jpg'" alt="Login" />
                </div>
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div class="w-full">
                        <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
                        <form @submit.prevent="submit">

                            <TextInput id="email" label="Email" placeholder="Email" type="email" v-model="form.email"
                                required autocomplete="email" :error="form.errors.email" />

                            <TextInput id="password" label="Password" placeholder="Password" type="password"
                                v-model="form.password" required autocomplete="new-password"
                                :error="form.errors.password" />



                            <label class="flex items-center mt-6 text-sm">
                                <input v-model="form.remember" type="checkbox" class="form-checkbox" />
                                <span class="ml-2">Remember me</span>
                            </label>
                            <button type="submit" class="block w-full mt-4 px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg">Login</button>
                        </form>
                        <p class="mt-4">
                            <a :href="route('register')" class="text-sm text-purple-600 hover:underline">Don't have an account? Register</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
