<template>
  <!-- Loading screen -->
  <div v-if="loading" class="flex items-center justify-center h-screen w-full bg-white">
    <div class="flex flex-col items-center bg-gray-200 shadow-lg p-2">
      <i class="bi bi-sun text-4xl text-gray-400 animate-spin"></i>
      <p class="text-black text-xl font-bold">Loading IFEDOLLARS Portfolio 😁... </p>
    </div>
  </div>

  <!-- Main content -->
  <div v-else>
    <div class="p-10 lg:p-4 lg:max-w-[calc(100%-600px)] md:mx-auto">
      <!-- Left vertical line -->
      <div class="hidden lg:block fixed top-0 left-[300px] h-full w-px bg-gray-300 z-0"></div>
      <!-- Right vertical line -->
      <div class="hidden lg:block fixed top-0  right-[300px] h-full w-px bg-gray-300 z-0"></div>


      <!-- top shii  -->
      <div class="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-2xl flex flex-row items-center gap-3 lg:gap-14 hover:bg-gray-200 hover:scale-110
       text-white px-7 lg:px-14 py-1 rounded-xl border-1 border-gray-300 transition duration-300 z-50">
        <!-- home -->
        <i @click="refreshPage" class="bi bi-house-door text-2xl text-gray-400 hover:text-black cursor-pointer"></i>
        <div class="w-px h-12 bg-gray-300"></div>
        <!-- twitter  -->
        <a href="https://x.com/IfedollarsAvr?t=KWrkgQdZLuh7Y7xaCLCWeg&s=09" target="_blank" rel="noopener">
          <i class="bi bi-twitter-x text-2xl text-gray-400 hover:text-black"></i>
        </a>
        <div class="w-px h-12 bg-gray-300 cursor-pointer"></div>
        <!-- github  -->
        <a href="https://github.com/Ifedollars99" target="_blank" rel="noopener">
          <i class="bi bi-github text-2xl text-gray-400 hover:text-black cursor-pointer"></i>
        </a>
        <div class="w-px h-12 bg-gray-300"></div>
        <!-- LinkedIn  -->
        <a href="https://www.linkedin.com/in/taofeeq-ifedolapo-7890162ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank" rel="noopener">
          <i class="bi bi-linkedin text-2xl text-gray-400 hover:text-black cursor-pointer"></i>
        </a>
        <div class="w-px h-12 bg-gray-300"></div>
        <!-- resume  -->
        <a href="/resume.pdf" download>
          <i class="bi bi-file-person text-2xl text-gray-400 hover:text-black cursor-pointer"></i>
        </a>
      </div>

      <!-- abt my self -->
      <div class="flex flex-col items-start  mt-32 gap-2" data-aos="fade-in" data-aos-duration="2000">
        <img class="rounded-full w-24 h-24"
          src="https://pbs.twimg.com/profile_images/1942172792595582976/KVeSxE3-_400x400.jpg" alt="Ifedollars 🐐">
        <h1 class="text-black font-bold text-2xl md:text-4xl"> Greetings!! I’m Taofeeq Ifedolapo <br>
          A Software Developer.🧑🏿‍💻 </h1>
        <h1 class="text-gray-500 text-sm md:text-xl font-normal text-left gap-2 mt-1">— a full-stack dev who builds
          sites
          that SLAPS. 🔥From clean code to bold UI. <br>
          — I am Confident that i can be of <span class="text-black font-bold"> "GREAT VALUE"</span> to your Prestigious
          Company or Team. <br>
          — driven by vision 👁️, built with ambition 🚀, shaped through creativity🎨. </h1>
      </div>
      <!-- button  -->
      <div class="flex flex-row mt-10 gap-4">
        <a href="https://wa.me/2348137628419?text=Hello 👋 i am ......... by name and i saw your portfolio!"
          target="_blank" rel="noopener noreferrer"
          class="bg-black no-underline font-bold flex items-center justify-center rounded-lg px-4 py-1 text-white text-xl animate-bounce  hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.4)] transition duration-300">Hire
          Me!</a>
        <div class="bg-blue-200 rounded-3xl px-4 py-1 flex flex-row justify-center items-center animate-pulse">
          <i class="bi bi-dot text-blue-500 text-5xl font-bold"></i>
          <h1 class="text-blue-500 text-xl font-normal hover:scale-110 ">Available 24/7 😉</h1>
        </div>
      </div>
    </div>

    <!-- wrapper with overflow -->
    <div class="w-full mt-20 px-4 overflow-hidden">
      <!-- auto-scroll container -->
      <div class="carousel-track flex gap-5 w-max animate-scroll"
        :class="{ 'animate-scroll': !isHovered, 'paused': isHovered }" @mouseenter="isHovered = true"
        @mouseleave="isHovered = false">
        <div v-for="i in 2" :key="i" class="flex gap-5">
          <!-- duplicate seamless -->
          <div v-for="img in images" :key="img"
            class="bg-gray-100 rounded-lg p-4 transition-transform duration-300 ease-in-out hover:scale-110">
            <div class="bg-gray-500 rounded-lg p-3">
              <img class="w-[300px] h-[200px] rounded-lg  hover:shadow-2xl" :src="img" alt="a group of images" />
            </div>
          </div>
        </div>
      </div>
    </div>




    <!-- Next pages -->
    <div data-aos="fade-up" data-aos-delay="200" class="lg:max-w-[calc(100%-600px)] lg:mx-auto mt-32 p-10 lg:p-4">
      <NextPage />
      <!-- next page end  -->
    </div>



    <!-- end  -->
  </div>


  <!-- Back to Top Button -->
  <button @click="scrollToTop"
    class="fixed bottom-6 right-6 md:hidden bg-white/30 backdrop-blur-2xl hover:bg-gray-200 text-white px-4 py-3 shadow-lg transition duration-300 hover:scale-110 z-50">
    <i class="bi bi-caret-up text-3xl text-blue-700"></i>
  </button>
</template>



<script setup>

import { ref, onMounted } from 'vue';
import AOS from 'aos'
import { useRouter } from 'vue-router';
import NextPage from './components/NextPage.vue';




const router = useRouter()
const loading = ref(true)
const isHovered = ref(false);
const images = [
  require('@/assets/images/ife1.png'),
  require('@/assets/images/ife2.png'),
  require('@/assets/images/ife3.png'),
  require('@/assets/images/ife4.png'),
]



//  end


router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh()
  }, 500)
})

const refreshPage = () => {
  window.location.reload()
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 3000) // 2 seconds
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

</script>

<style setup>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.carousel-track::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50px;
  width: 50px;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.1), transparent);
  z-index: 10;
  pointer-events: none;
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.paused {
  animation-play-state: paused !important;
}
</style>