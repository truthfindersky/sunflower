<script setup>

</script>


<template>
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">



        <!-- Mobile sidebar -->
        <!-- Backdrop -->
        <!--   <div x-show="isSideMenuOpen" x-transition:enter="transition ease-in-out duration-150"
            x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in-out duration-150" x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div> -->

        <div class="flex flex-col flex-1 w-full">
            <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
                <div
                    class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
                    <!-- Mobile hamburger -->
                    <button class="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                        @click="toggleSideMenu" aria-label="Menu">
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>


                    <div class="space-x-6">
                        <Link href="/" class="nav-link" :class="{ 'bg-slate-700': $page.component === 'Home' }">Home
                        </Link>
                        <Link :href="route('about')" class="nav-link"
                            :class="{ 'bg-slate-700': $page.component === 'About' }">About</Link>
                    </div>

                    <div class="space-x-6">
                        <Link :href="route('register')" class="nav-link"
                            :class="{ 'bg-slate-700': $page.component === 'Auth/Register' }">Register</Link>
                        <Link :href="route('login')" class="nav-link"
                            :class="{ 'bg-slate-700': $page.component === 'Auth/Login' }">Login</Link>
                    </div>

                </div>
            </header>
            <main class="h-full overflow-y-auto">

                <slot />

            </main>
        </div>
    </div>

</template>
