<template>
  <nav class="bg-gray-50 shadow-md fixed w-full z-10 p-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-3">

          <img :src="require('@/assets/images/prodmast.png')" class="w-12 h-12" alt="Product">
          <h1 class="text-lg text-black mt-0.5">Prodmast</h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-10 items-center">
          <a href="#" class="text-black no-underline">Home</a>
          <a href="#" class="text-black  no-underline">About</a>
          <a href="#" class="text-black  no-underline">Services</a>
          <a href="#" class="text-black  no-underline">Contact </a>
        </div>

        <button class="hidden md:flex ">
          <a href="#" onclick="location.reload();"
            class="flex items-center justify-center text-white text-xs bg-teal-900 rounded-full w-28 mt-2.5 h-10 no-underline">
            Sign Up
          </a>
        </button>

        <!-- Mobile Toggle -->
        <div class="flex items-center md:hidden">
          <button @click="toggleMenu" class="text-teal-900 focus:outline-none">
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
    <div v-if="isOpen" class="bg-teal-900 px-[125px] py-1 rounded-2xl md:hidden  z-20 fixed left-24"></div>
    <div v-if="isOpen"
      class="md:hidden flex flex-col mt-1 justify-start gap-3 px-4 w-[250px] pb-4 py-2 bg-gray-300 z-20 fixed left-24">
      <a href="#" class=" text-teal-500 hover:text-teal-600 no-underline">Home</a>
      <a href="#" class=" text-teal-500 hover:text-teal-600 no-underline">About</a>
      <a href="#" class=" text-teal-500 hover:text-teal-600 no-underline">Services</a>
      <a href="#" class=" text-teal-500 hover:text-teal-600 no-underline">Contact</a>
      <a href="#" onclick="location.reload();"
        class="flex items-center justify-center text-white text-xs bg-teal-900 rounded-full w-28 mt-2.5 h-10 no-underline">
        Sign Up
      </a>
    </div>
  </div>


  <div>
    <ShowContent />
  </div>
  <div>
    <ShowPage />
  </div>
  <!-- Back to Top Button -->
  <button @click="scrollToTop"
    class="fixed bottom-6 right-6 bg-white/30 backdrop-blur-2xl hover:bg-gray-800 text-white px-4 py-3 shadow-lg transition duration-300 z-50">
    <i class="bi bi-caret-up text-3xl text-cyan-500"></i>
  </button>

</template>

<script setup>
import { ref } from 'vue';
import ShowContent from './components/ShowContent.vue';
import ShowPage from './components/ShowPage.vue'

const isOpen = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
