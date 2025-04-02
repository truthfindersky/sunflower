<script setup>

import TextInput from "@/Components/TextInput.vue";

import { useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    remember: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>


<template>

    <Head title="Registar" />

    <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div class="flex flex-col overflow-y-auto md:flex-row">
                <div class="h-32 md:h-auto md:w-1/2">
                    <img aria-hidden="true" class="object-cover w-full h-full dark:hidden"
                        :src="'storage/website/register.jpg'" alt="Office" />
                    <img aria-hidden="true" class="hidden object-cover w-full h-full dark:block"
                        :src="'storage/website/register.jpg'" alt="Office" />
                </div>
                <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div class="w-full">
                        <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Create account
                        </h1>


                        <form @submit.prevent="submit">
                            <TextInput id="name" label="Name" placeholder="Name" type="text" v-model="form.name"
                                required autofocus autocomplete="name" :error="form.errors.name" />

                            <TextInput id="email" label="Email" placeholder="Email" type="email" v-model="form.email"
                                required autocomplete="email" :error="form.errors.email" />

                            <TextInput id="password" label="Password" placeholder="Password" type="password"
                                v-model="form.password" required autocomplete="new-password"
                                :error="form.errors.password" />

                            <TextInput id="password_confirmation" label="Confirm Password"
                                placeholder="Confirm Password" type="password" v-model="form.password_confirmation"
                                required autocomplete="new-password" />


                            <div class="flex mt-6 text-sm">
                                <label class="flex items-center dark:text-gray-400">
                                    <input type="checkbox" v-model="form.remember"
                                        class="form-checkbox text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray" />
                                    <span class="ml-2">
                                        I agree to the
                                        <span class="underline">privacy policy</span>
                                    </span>
                                </label>
                            </div>


                            <button type="submit"
                                class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                                Create account
                            </button>

                        </form>

                        <hr class="my-8" />


                        <p class="mt-4">
                            <a class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                                :href="route('login')">
                                Already have an account? Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
