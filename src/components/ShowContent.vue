<template>
    <div>
        <div class="p-8">
            <div class="flex flex-col items-center mt-7 md:mt-16 lg:mt-24">
                <h1 class="text-black text-3xl md:text-4xl lg:text-6xl">The Future of Manufacturing</h1>
                <div class="text-black text-3xl md:text-4xl lg:text-6xl flex flex-row">
                    <h1 class="text-black text-3xl md:text-4xl lg:text-6xl">with</h1>
                    <h1 class="text-teal-900 text-3xl md:text-4xl lg:text-6xl">Latest Technology</h1>
                </div>
                <!-- crazy placings -->

                <body class="bg-gray-50 flex items-center justify-center h-screen relative">

                    <!-- Floating Icons: Left -->
                    <div class="hidden lg:flex">
                        <div class="absolute left-16 xl:left-40 top-[450px] -translate-y-1/2 flex flex-col gap-4">
                            <button
                                class="w-10 h-10 flex items-center justify-center bg-white border rounded-full shadow">
                                <i class="bi bi-tools text-gray-700"></i>
                            </button>
                            <button class="absolute -left-10 xl:-left-20 top-[30px]">
                                <i class="bi bi-arrow-up-right-circle text-teal-900 text-3xl"></i>
                            </button>
                            <button class="w-10 h-10 flex items-center justify-center bg-lime-200 rounded-full shadow">
                                <i class="bi bi-badge-4k text-gray-800"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Center Content -->
                    <div class="text-center">
                        <p class="text-2xl text-black mb-10 mt-14">
                            Expert tech to elevate your manufacturing. Let’s take your business further.
                        </p>
                        <div class="flex flex-col sm:flex-row justify-center gap-4">
                            <button class="bg-green-900 text-white px-10 py-3 rounded-full shadow">
                                Get Started
                            </button>
                            <button class="bg-white border px-10 py-3 rounded-full shadow">
                                Try Demo
                            </button>
                        </div>
                    </div>

                    <!-- Floating Icons: Right -->
                    <div class="hidden lg:flex">
                        <div class=" absolute right-16 xl:right-40 top-[450px] -translate-y-1/2 flex flex-col gap-4">
                            <button class="w-10 h-10 flex items-center justify-center bg-lime-200 rounded-full shadow">
                                <i class="bi bi-bar-chart-line text-gray-800"></i>
                            </button>
                            <button class="w-10 h-10 flex items-center justify-center bg-white border rounded-full shadow
                                absolute right-10 xl:right-20 top-[50px]
                                ">
                                <i class="bi bi-list text-gray-700"></i>
                            </button>
                        </div>
                    </div>

                </body>
                <!-- and this -->

                <!-- review stars -->
                <div class="text-center mt-20 mb-8">
                    <div class="flex justify-center items-center gap-1 text-yellow-400 text-lg">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <span class="text-black font-semibold ml-2">5.0</span>
                    </div>
                    <p class="text-sm text-gray-600 mt-1">from 60+ reviews</p>
                </div>

                <!-- stats cards -->
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto items-end w-full px-4">
                    <!-- Image -->
                    <div class="rounded-lg h-[250px]">
                        <img :src="require('@/assets/images/yellow.png')" class="w-full h-full object-cover"
                            alt="Pipes" />
                    </div>


                    <!-- Clients -->
                    <div
                        class="bg-green-950 text-white rounded-xl p-6 flex flex-col justify-center items-center text-center shadow">
                        <h2 class="text-3xl font-bold">100+</h2>
                        <p class="mt-2 text-sm">Our Esteemed Clients and Partners</p>
                    </div>

                    <!-- Projects -->
                    <div class="bg-white rounded-xl p-6 shadow text-center">
                        <div class="flex justify-between items-center mb-2">
                            <i class="bi bi-kanban-fill text-green-600 text-xl"></i>
                            <i class="bi bi-three-dots-vertical text-gray-400"></i>
                        </div>
                        <h3 class="text-gray-500 text-sm">Total Projects</h3>
                        <h2 class="text-3xl font-bold mt-1">1951+</h2>
                        <p class="text-xs text-green-600 mt-1">Increased of 10% this month</p>
                    </div>

                    <!-- Years -->
                    <div
                        class="bg-lime-200 rounded-xl p-6 flex flex-col justify-center items-center text-center shadow">
                        <h2 class="text-3xl font-bold">6+</h2>
                        <p class="mt-2 text-sm">Years of Dedicated Service</p>
                    </div>

                    <!-- CTA -->
                    <div
                        class="bg-green-950 text-white rounded-xl px-6 h-[250px] flex flex-col justify-center items-center text-center shadow">
                        <i class="bi bi-emoji-smile text-2xl mb-2"></i>
                        <p>Achieve Optimal Efficiency and Boost Productivity</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- efficient -->
        <div class="mt-24 bg-teal-950 w-full h-auto p-4">
            <div class="flex flex-col mt-14 items-center gap-2">
                <h1 class="text-white text-2xl md:text-4xl">Efficient and Integrated <br> Manufacturing Services</h1>
                <h1 class="text-white text-xs md:text-sm">Simplify operations with our efficient, quality-focused
                    services</h1>
            </div>
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <!-- first -->
                <div class=" bg-white/20 backdrop-blur-2xl rounded-lg p-8 flex flex-col gap-16">
                    <div class="flex flex-row justify-between text-white">
                        <i class="bi bi-asterisk text-3xl font-normal"></i>
                        <i class="bi bi-arrow-up-right text-3xl font-normal"></i>
                    </div>
                    <div class="text-white flex flex-col">
                        <h1 class="text-2xl font-normal">Production and Assembly</h1>
                        <h1 class="text-sm font-normal">Details on production processes, assembly, <br> capacity and
                            product types.</h1>
                    </div>
                </div>
                <!-- second -->
                <div class=" bg-white/20 backdrop-blur-2xl rounded-lg p-8 flex flex-col gap-16">
                    <div class="flex flex-row justify-between text-white">
                        <i class="bi bi-layers text-3xl font-normal"></i>
                        <i class="bi bi-arrow-up-right text-3xl font-normal"></i>
                    </div>
                    <div class="text-white flex flex-col">
                        <h1 class="text-2xl font-normal">Custom Manufacturing</h1>
                        <h1 class="text-sm font-normal">Custom creation product with design and <br> customization
                            options.</h1>
                    </div>
                </div>
                <!-- third -->
                <div class=" bg-white/20 backdrop-blur-2xl rounded-lg p-8 flex flex-col gap-16">
                    <div class="flex flex-row justify-between text-white">
                        <i class="bi bi-pen text-3xl font-normal"></i>
                        <i class="bi bi-arrow-up-right text-3xl font-normal"></i>
                    </div>
                    <div class="text-white flex flex-col">
                        <h1 class="text-2xl font-normal">Quality Control</h1>
                        <h1 class="text-sm font-normal">Procedured and systems in place to ensure <br> high product
                            quality.</h1>
                    </div>
                </div>
                <!-- fourth -->
                <div class=" bg-white/20 backdrop-blur-2xl rounded-lg p-8 flex flex-col gap-16">
                    <div class="flex flex-row justify-between text-white">
                        <i class="bi bi-flower2 text-3xl font-normal"></i>
                        <i class="bi bi-arrow-up-right text-3xl font-normal"></i>
                    </div>
                    <div class="text-white flex flex-col">
                        <h1 class="text-2xl font-normal">Technology and Innovation</h1>
                        <h1 class="text-sm font-normal">Details on the latest manufacturing <br> technologies and
                            ongoing innovations.</h1>
                    </div>
                </div>
                <!-- fifth -->
                <div class=" bg-white/20 backdrop-blur-2xl rounded-lg p-8 flex flex-col gap-16">
                    <div class="flex flex-row justify-between text-white">
                        <i class="bi bi-gem text-3xl font-normal"></i>
                        <i class="bi bi-arrow-up-right text-3xl font-normal"></i>
                    </div>
                    <div class="text-white flex flex-col">
                        <h1 class="text-2xl font-normal">Packaging and Logistics</h1>
                        <h1 class="text-sm font-normal">Packaging and logistics for shipping to<br> Customers and
                            distributors.</h1>
                    </div>
                </div>
                <!-- sixth -->
                <div class=" bg-white/20 backdrop-blur-2xl rounded-lg p-8 flex flex-col gap-16">
                    <div class="flex flex-row justify-between text-white">
                        <i class="bi bi-graph-up text-3xl font-normal"></i>
                        <i class="bi bi-arrow-up-right text-3xl font-normal"></i>
                    </div>
                    <div class="text-white flex flex-col">
                        <h1 class="text-2xl font-normal">Consulting Market Research</h1>
                        <h1 class="text-sm font-normal">Srvices to help companies understand <br> market needs and
                            provide strategic advice.</h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- next -->
        <div class="py-20 px-6 md:px-20 bg-white mt-10">
            <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-48 md:gap-12">
                <!-- Left Side (Image with overlay card) -->
                <div class="relative w-full md:w-1/2">
                    <div class="bg-gray-100 rounded-2xl p-8 shadow-lg">
                        <img src="@/assets/images/orr.png" alt="Chart" class="w-full h-auto" />
                    </div>

                    <!-- Overlay Card -->
                    <div
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-2xl shadow-lg p-4 w-60 flex flex-col text-center">
                        <div class="flex justify-between items-center mb-2">
                            <div class="bg-green-300 ">
                                <i class="bi bi-kanban-fill text-teal-950 text-xl"></i>
                            </div>
                            <i class="bi bi-three-dots-vertical text-gray-400"></i>
                        </div>
                        <div class="flex flex-row gap-2">
                            <p class="text-black text-xl">Total Projects</p>
                            <i class="bi bi-check-circle-fill text-teal-950 text-lg ">8%</i>
                        </div>
                        <h2 class="text-2xl font-bold">1951+</h2>
                        <p class="text-xs text-green-600 mt-1">Increased of 18% this month</p>
                    </div>
                </div>

                <!-- Right Side (Text content) -->
                <div class="w-full md:w-1/2">
                    <h2 class="text-2xl md:text-3xl font-bold mb-4">
                        Key Benefits of Our System for <br />
                        Your Business Efficiency
                    </h2>
                    <p class="text-gray-600 mb-6">
                        Our systems boost productivity, cut costs, and drive business growth.
                    </p>

                    <ul class="space-y-6">
                        <li class="flex items-start gap-3">
                            <i class="bi bi-check-circle-fill text-teal-950 text-xl mt-1"></i>
                            <div>
                                <h3 class="font-semibold">Boosting Quality with Tech</h3>
                                <p class="text-sm text-gray-600">
                                    With advanced technology, we help you achieve top product quality. Discover how we
                                    can enhance your standards.
                                </p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="bi bi-check-circle-fill text-teal-950 text-xl mt-1"></i>
                            <div>
                                <h3 class="font-semibold">Optimization Production Process</h3>
                                <p class="text-sm text-gray-600">
                                    Boost factory efficiency and productivity with our innovative solutions. See how the
                                    latest technology can maximize your output.
                                </p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="bi bi-check-circle-fill text-teal-950 text-xl mt-1"></i>
                            <div>
                                <h3 class="font-semibold">AI-Driven Production</h3>
                                <p class="text-sm text-gray-600">
                                    Leverage the power of AI to transform your manufacturing processes, achieving faster
                                    and more effective results.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       
        <!-- ending -->
    </div>
</template>



<script setup>
</script>

<style></style>