<template>
  <nav class="bg-neutral-950 shadow-md fixed w-full z-10 p-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="https://i.pinimg.com/736x/8b/29/a3/8b29a3e4b573bb5c95300a2738503dbc.jpg" class="w-12 h-12"
            alt="My logo">
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-4 items-center">
          <a href="#" class="text-white hover:text-blue-600 no-underline">Home</a>
          <a href="#" class="text-white hover:text-blue-600 no-underline">Services</a>
          <div class="relative group">
            <!-- ACtivities -->
            <div @click="toggleActivities" class="flex items-center gap-1 cursor-pointer">
              <span class="text-white hover:text-blue-600">Activities</span>
              <i class="bi bi-arrow-down-short text-white transition-transform duration-300"
                :class="{ 'rotate-180': isActivitiesOpen }"></i>
            </div>

            <div v-if="isActivitiesOpen" class="absolute mt-3 bg-neutral-950 rounded-md shadow-lg py-2 w-40 z-20">
              <div v-if="isActivitiesOpen" class="bg-blue-500 p-0.5 rounded-2xl"></div>
              <a href="#" class="block px-4 py-2 text-white hover:bg-neutral-700 no-underline">Our Works</a>
              <a href="#" class="block px-4 py-2 text-white hover:bg-neutral-700 no-underline">Advertisement</a>
            </div>
          </div>

          <!-- Company Profile -->
          <div class="relative group">
            <div @click="toggleCompany" class="flex items-center gap-1 cursor-pointer">
              <span class="text-white hover:text-blue-600">Company Profile</span>
              <i class="bi bi-arrow-down-short text-white transition-transform duration-300"
                :class="{ 'rotate-180': isCompanyOPen }"></i>
            </div>

            <div v-if="isCompanyOPen" class="absolute mt-3 bg-neutral-950 rounded-md shadow-lg py-2 w-40 z-20">
              <div v-if="isCompanyOPen" class="bg-blue-500 p-0.5 rounded-2xl"></div>
              <a href="#" class="block px-4 py-2 text-white hover:bg-neutral-700 no-underline">Board of directors</a>
              <a href="#" class="block px-4 py-2 text-white hover:bg-neutral-700 no-underline">Our Team</a>
            </div>
          </div>

          <a href="#" class="text-white hover:text-blue-600 no-underline">Gallery</a>
          <a href="#" class="text-white hover:text-blue-600 no-underline">About Us</a>
          <a href="#" class="text-white hover:text-blue-600 no-underline">Contact Us</a>
        </div>

        <!-- Mobile Toggle -->
        <div class="flex items-center md:hidden">
          <button @click="toggleMenu" class="text-yellow-700 focus:outline-none">
            <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!-- Mobile Menu -->
  <div class="px-4 pt-20 md:px-20">
    <div v-if="isOpen" class="bg-blue-500 px-32 py-1 rounded-2xl md:hidden  z-20 fixed left-24"></div>
    <div v-if="isOpen"
      class="md:hidden flex flex-col mt-1 justify-start gap-3 px-4 w-[250px] pb-4 py-2 bg-neutral-950 z-20 fixed left-24">
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline">Home</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline">Services</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline ">Activities</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline ml-3">Our Works</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline ml-3">Advertisement </a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline">Company profile</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline ml-3">Board of directors</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline ml-3">Our Team</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline">Gallery</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline">About Us</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline">Contact Us</a>
      <a href="#" class=" text-yellow-500 hover:text-yellow-600 no-underline">Registration Page</a>
    </div>
  </div>

 <div class="animate__animated animate__lightSpeedInLeft">
    <div
      class="background h-[900px] w-full bg-cover bg-center flex flex-col gap-20 items-center px-6 py-20 md:py-72 lg:py-48">
      <h1 class="text-white font-bold text-3xl md:text-5xl lg:text-7xl ">WELCOME TO ESTATE GROUP OF COMPANIES LIMITED
      </h1>
      <h1 class="text-white text-lg md:text-xl lg:text-3xl font-bold">A Combination of Estate Builders Nigeria Limited,
        Estate Waters Limited,
        Estate Online Market Linited, and Citizens Attorneys and Associates </h1>

      <div class="flex justify-center items-center">
        <div class="border-4 border-white hover:border-none hover:bg-black px-10 py-2 rounded-2xl">
          <a class="text-white bg-transparent font-bold text-2xl no-underline" href="#">About Us</a>
        </div>
      </div>
    </div>
  </div>
  <div>
    <ShowContent />
  </div>
  <!-- Back to Top Button -->
<button
  @click="scrollToTop"
  class="fixed bottom-6 right-6 bg-white/30 backdrop-blur-2xl hover:bg-gray-800 text-white px-4 py-3 shadow-lg transition duration-300 z-50"
>
  <i class="bi bi-caret-up text-3xl text-cyan-500"></i>
</button>

</template>

<script setup>
import { ref } from 'vue'
import ShowContent from './components/ShowContent.vue'

const isOpen = ref(false)
const isActivitiesOpen = ref(false)
const isCompanyOPen = ref(false)


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}


const toggleCompany = () => {
  if (!isCompanyOPen.value) {
    isActivitiesOpen.value = false // close the other dropdown
  }
  isCompanyOPen.value = !isCompanyOPen.value
}

const toggleActivities = () => {
  if (!isActivitiesOpen.value) {
    isCompanyOPen.value = false // close the other dropdown
  }
  isActivitiesOpen.value = !isActivitiesOpen.value
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
nav a {
  transition: color 0.7s ease;
}

.background {
  background-image: url('https://i.pinimg.com/736x/53/6a/c4/536ac430fdf158cd3bce9fcc7dd7b5fd.jpg');
}
</style>
