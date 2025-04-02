<template>

    <Head :title="$page.component" />

    <div class="container px-6 mx-auto grid">
        <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            {{ $page.component }} MM
        </h2>

        <!-- Hero Section -->
        <div class="">
            <!-- Full-width Image -->
            <img :src="'storage/website/hero.jpg'" alt="Hero Image" class="absolute inset-0 w-full h-full object-cover">

            <!-- Overlay (Darkened background for text readability) -->
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
                <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                <p class="text-lg md:text-xl mb-6">Discover amazing content and explore new possibilities with us.</p>
                <div class="space-x-4">
                    <a href="#" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold">Get Started</a>
                    <a href="#" class="px-6 py-3 border border-white rounded-lg text-lg font-semibold">Learn More</a>
                </div>
            </div>
        </div>

    </div>
</template>
