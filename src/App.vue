<template>
  <div v-if="loading" class="flex items-center justify-center h-screen w-full bg-slate-900">
    <div class="flex flex-col items-center gap-3">
      <i class="bi bi-cloud-sun text-5xl text-blue-400"></i>
      <i class="bi bi-arrow-clockwise text-xl text-blue-400 animate-spin"></i>
      <p class="text-white text-lg">Loading weather dashboard... </p>
    </div>
  </div>

  <div v-else>
    <!-- Navbar -->
    <nav class="bg-slate-700/60 backdrop-blur-xl shadow-md w-full z-10 py-2 px-6">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <i class="bi bi-cloud text-3xl text-blue-600"></i>
          <h1 class="text-sm md:text-xl text-white mt-0.5 font-bold">Weather Dashboard</h1>
        </div>
        <div class="flex flex-row gap-2 md:gap-6 items-center">
          <a href="#" onclick="location.reload();"> </a>
            <i class="bi bi-arrow-clockwise text-white text-3xl -mt-3 md:-mt-5 no-underline font-normal"></i>
            <div class="flex flex-row gap-2">
              <h1 class="text-white no-underline text-xs md:text-sm ">todays date:</h1>
              <p class="text-xs md:text-sm text-white">{{ currentDate }}</p>
              <p class="text-xs text-gray-300 ">{{ currentTime }}</p>
            </div>
          
        </div>
      </div>
    </nav>

    <!-- main content -->
    <div class="flex flex-col items-center md:flex-row p-2 mt-10 gap-4">
      <!-- ShowContent -->
      <div class="grid grid-cols-1 gap-3 w-full md:w-2/6">
        <ShowContent :city="city" :weather-data="weatherData" @update-city="updateCity" />
      </div>
      <!-- ShowDiv -->
      <div class="grid grid-cols-1 gap-5 w-full md:w-3/4">
        <ShowDiv :weather-data="weatherData" />
      </div>
    </div>

    <!-- Back to Top Button -->
    <button @click="scrollToTop"
      class="fixed bottom-6 right-6 md:hidden bg-white/30 backdrop-blur-2xl hover:bg-gray-800 text-white px-4 py-3 shadow-lg transition duration-300 z-50">
      <i class="bi bi-caret-up text-3xl text-cyan-500"></i>
    </button>
  </div>
</template>


<script setup>
import ShowContent from './components/ShowContent.vue';
import ShowDiv from './components/ShowDiv.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const city = ref('Lagos')
const weatherData = ref(null)
const loading = ref(true)
const currentDate = ref('')
const currentTime = ref('')

//  date/time
const updateDateTime = () => {
  const now = new Date()
  currentDate.value = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  currentTime.value = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}

const fetchData = async () => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=93c4e89ebb004f31888200554252806&q=${city.value}&days=3&aqi=yes&alerts=yes`
    )
    weatherData.value = await response.json()
  } catch (error) {
    console.error("Weather fetch failed:", error)
  }
}

const updateCity = (newCity) => {
  city.value = newCity
  fetchData()
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  fetchData()
  updateDateTime() // Initial call
  const timeInterval = setInterval(updateDateTime, 60000) // Update every minute
  setTimeout(() => loading.value = false, 3000)
  
  onUnmounted(() => {
    clearInterval(timeInterval)
  })
})
</script>