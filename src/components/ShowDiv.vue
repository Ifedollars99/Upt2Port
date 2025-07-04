<template>



      <!-- First: Current Weather Overview -->
      <div v-if="weatherData" class="bg-slate-700/60 p-6 rounded-xl text-white space-y-4">
         <div class="flex justify-between items-start">
            <div>
               <h2 class="text-xl font-semibold">Current Weather</h2>
               <p class="text-sm text-gray-300">{{ weatherData.location.name }}, {{ weatherData.location.region }}</p>
            </div>
            <div class="text-right">
               <img :src="'https:' + weatherData.current.condition.icon" alt="weather icon"
                  class="w-12 h-12 inline-block" />
               <p class="text-3xl font-bold">{{ weatherData.current.temp_c }}°C</p>
               <p class="text-sm text-gray-300">{{ weatherData.current.condition.text }}</p>
            </div>
         </div>

         <!-- Stats Grid -->
         <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div class="bg-slate-700 space-y-2 rounded-lg p-4 h-36">
               <div class="flex flex-row gap-2 items-center">
                  <i class="bi bi-thermometer text-blue-400 text-2xl"></i>
                  <p class="text-gray-300 mb-1">Feels Like</p>
               </div>
               <p class="text-xl font-bold">{{ weatherData.current.feelslike_c }}°C</p>
            </div>
            <div class="bg-slate-700 space-y-2 rounded-lg p-4 h-36 ">
               <div class="flex flex-row gap-2 items-center md:-ml-4 lg:ml-0">
                  <i class="bi bi-moisture text-blue-400 text-2xl"></i>
                  <p class="text-gray-300 mb-1">Humidity</p>
               </div>
               <p class="text-xl font-bold">{{ weatherData.current.humidity }}%</p>
            </div>
            <div class="bg-slate-700 space-y-1 rounded-lg p-4 h-36">
               <div class="flex flex-row gap-2 items-center">
                  <i class="bi bi-wind  text-blue-400 text-2xl"></i>
                  <p class="text-gray-300 mb-1">Wind</p>
               </div>
               <p class="text-xl font-bold">{{ weatherData.current.wind_kph }} km/h</p>
               <p class="text-xs text-gray-400 uppercase -mt-1">{{ weatherData.current.wind_dir }}</p>
            </div>
            <div class="bg-slate-700 space-y-2 rounded-lg p-4 h-36">
               <div class="flex flex-row gap-2 items-center md:-ml-4 lg:ml-0">
                  <i class="bi bi-eye-slash text-blue-400 text-2xl"></i>
                  <p class="text-gray-300 mb-1">Visibility</p>
               </div>
               <p class="text-xl font-bold">{{ weatherData.current.vis_km }} km</p>
            </div>
         </div>
      </div>

      <!-- Second: Hourly Forecast -->
      <div v-if="weatherData" class="bg-slate-700/60 p-6 rounded-xl text-white">
         <h2 class="text-lg font-semibold mb-4">Hourly Forecast</h2>
         <div class="flex gap-4 overflow-x-auto scroll-smooth">
            <div v-for="(hour, i) in weatherData.forecast.forecastday[0].hour" :key="i"
               class="flex flex-col items-center min-w-[50px] text-sm p-2 rounded-lg bg-slate-800"
               :class="i === new Date().getHours() ? 'border border-blue-400' : ''">
               <p class="text-xs text-gray-300">
                  {{ i === new Date().getHours() ? 'Now' : `${hour.time.split(' ')[1].slice(0, 5)}` }}
               </p>
               <img :src="'https:' + hour.condition.icon" class="w-6 h-6" />
               <p class="font-semibold">{{ hour.temp_c }}°</p>
            </div>
         </div>
      </div>

   <!-- Third: UV Index -->
   <div v-if="weatherData" class="bg-slate-700/60 p-6 rounded-xl text-white space-y-3">
      <div class="flex justify-between items-start">
         <h2 class="text-lg font-semibold">UV Index</h2>
         <span class="bg-yellow-200 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
            {{ uvLevel }}
         </span>
      </div>
      <p class="text-2xl font-bold">{{ weatherData.current.uv }}</p>
      <div class="h-2 bg-slate-600 rounded-full overflow-hidden">
         <div class="h-full bg-green-400" :style="{ width: `${uvPercentage}%` }">
         </div>
      </div>
      <div class="flex justify-between text-xs text-gray-400 mt-1">
         <span>0</span>
         <span>5</span>
         <span>10</span>
      </div>
   </div>

   <!-- Fourth: Precipitation -->
   <div v-if="weatherData" class="bg-slate-700/60 p-6 rounded-xl text-white space-y-3">
      <h2 class="text-lg font-semibold">Precipitation</h2>
      <div class="flex items-center gap-3">
         <div class="bg-blue-700 p-2 rounded-full">
            <i class="bi bi-cloud-drizzle text-2xl text-blue-200"></i>
         </div>
         <div>
            <p class="text-xl font-bold">
               {{ weatherData.forecast.forecastday[0].day.daily_chance_of_rain }}%
            </p>
            <p class="text-sm text-gray-300">Chance of precipitation</p>
         </div>
      </div>
      <p class="text-sm text-gray-400">
         {{
            weatherData.forecast.forecastday[0].day.daily_chance_of_rain > 0
               ? 'Take an umbrella just in case.'
               : 'No precipitation expected today.'
         }}
      </p>
   </div>

</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  weatherData: Object
})

const uvLevel = computed(() => {
  const uv = props.weatherData?.current?.uv || 0
  if (uv < 3) return 'Low'
  if (uv < 6) return 'Moderate'
  if (uv < 8) return 'High'
  if (uv < 11) return 'Very High'
  return 'Extreme'
})

const uvPercentage = computed(() => {
  const uv = props.weatherData?.current?.uv || 0
  return Math.min((uv / 10) * 100, 100)
})
</script>
