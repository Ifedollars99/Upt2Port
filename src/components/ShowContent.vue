<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-2">
            <i class="bi bi-geo-alt text-white text-lg"></i>
            <h1 class="text-white text-lg">Location</h1>
        </div>
        <!-- search -->
        <div class="relative w-full">
            <!-- Search Icon -->
            <i class="bi bi-search text-gray-400 absolute left-3 top-[35px] -translate-y-1/2 text-lg"></i>

            <!-- Input -->
            <input type="text" v-model="searchQuery" @input="fetchSuggestions" @focus="fetchSuggestions"
                @blur="hideSuggestionsWithDelay" placeholder="Search on here"
                class="w-full bg-slate-800/60 text-gray-400 pl-10 pr-4 py-4 rounded-md border-none outline-none" />
            <div class="bg-slate-700/60 p-2 rounded-lg text-gray-400 text-lg mt-3">Search cities worldwide...</div>

            <!-- Dropdown -->
            <ul v-if="showSuggestions && suggestions.length"
                class="absolute z-10 mt-1 w-full bg-slate-900 rounded-md shadow-lg max-h-[300px] overflow-auto transition-opacity duration-200"
                :class="showSuggestions ? 'opacity-100' : 'opacity-0'">>
                <li v-for="(item, index) in suggestions" :key="index" @mousedown.prevent="selectCity(item)"
                    class="px-4 py-6 text-white hover:bg-slate-700/60 cursor-pointer flex justify-between">
                    <span>{{ item.name }}, {{ item.country }}</span>
                    <span class="text-lg text-gray-400">{{ item.region }}</span>
                </li>
            </ul>
        </div>
    </div>
    <!-- search end above -->

    <!-- second -->
    <div class="bg-gradient-to-r from-slate-900 to-slate-700/60  p-3 rounded-xl shadow-md text-white"
        v-if="weatherData">
        <div class="flex justify-between items-center mb-4">
            <div>
                <h2 class="text-2xl font-bold">{{ weatherData.location.name }}</h2>
                <p class="text-sm text-gray-300">{{ weatherData.location.region }}</p>
            </div>
            <div class="text-right">
                <h2 class="text-3xl font-bold">{{ weatherData.current.temp_c }}°C</h2>
                <p class="text-sm text-gray-400">Feels like {{ weatherData.current.feelslike_c }}°</p>
            </div>
        </div>

        <div class="flex items-center gap-3 mb-4">
            <img :src="'https:' + weatherData.current.condition.icon" alt="weather icon" class="w-12 h-12" />
            <div>
                <p class="font-semibold text-lg">{{ weatherData.current.condition.text }}</p>
                <p class="text-sm text-gray-300">Few Clouds</p>
            </div>
        </div>

        <div class="flex justify-between text-sm text-gray-300">
            <span>↓ {{ weatherData.forecast.forecastday[0].day.mintemp_c }}°</span>
            <span>↑ {{ weatherData.forecast.forecastday[0].day.maxtemp_c }}°</span>
            <span>💧 {{ weatherData.forecast.forecastday[0].day.daily_chance_of_rain }}%</span>
        </div>
    </div>


    <!-- third -->
    <div class="space-y-5">
        <div class="bg-blue-900/70 p-3 rounded-lg flex flex-row items-center text-blue-400 gap-3 "
            onclick="location.reload();">
            <i class="bi bi-brightness-high text-3xl"></i>
            <h1 class="text-2xl">Current</h1>
        </div>
        <div class=" p-3 hover:bg-slate-800 rounded-lg flex flex-row items-center text-white gap-3" @click="showAlert">
            <i class="bi bi-calendar-minus text-3xl"></i>
            <h1 class="text-2xl">Forecast</h1>
        </div>
        <div class=" p-3 hover:bg-slate-800 rounded-lg flex flex-row items-center text-white gap-3" @click="showAlert">
            <i class="bi bi-bar-chart text-3xl"></i>
            <h1 class="text-2xl">Details</h1>
        </div>
    </div>

    <!-- Fifth: Sunrise & Sunset -->
    <div v-if="weatherData" class="bg-slate-700/60 p-3 rounded-lg text-white">
        <h2 class="text-lg font-semibold mb-4">Sunrise & Sunset</h2>
        <div class="flex justify-between">
            <div class="flex items-center gap-2">
                <i class="bi bi-sunrise text-yellow-400 text-2xl"></i>
                <div>
                    <p class="text-sm text-gray-300">Sunrise</p>
                    <p class="text-lg font-bold -mt-2">{{ sunrise }}</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <i class="bi bi-sunset text-orange-400 text-2xl"></i>
                <div>
                    <p class="text-sm text-gray-300">Sunset</p>
                    <p class="text-lg font-bold -mt-2">{{ sunset }}</p>
                </div>
            </div>
        </div>
    </div>


    <!-- Sixth: Air Quality -->
    <div class="bg-slate-700/60 p-3 rounded-lg text-white">
        <h2 class="text-lg font-semibold mb-4">Air Quality</h2>
        <div class="flex items-center justify-between mb-2">
            <div class="w-full h-3 bg-slate-600 rounded-full overflow-hidden">
                <div class="h-3 bg-green-400" :style="{ width: airQualityPercentage + '%' }"></div>
            </div>
            <span class="ml-3 text-sm px-3 py-1 rounded-full" :class="{
                'bg-green-600': airQualityLabel === 'Good',
                'bg-yellow-500': airQualityLabel === 'Moderate',
                'bg-orange-600': airQualityLabel === 'Unhealthy',
                'bg-red-700': airQualityLabel === 'Hazardous',
            }">
                {{ airQualityLabel }}
            </span>
        </div>
        <div class="flex justify-between text-xs text-gray-400">
            <span>0</span>
            <span>50</span>
            <span>100</span>
        </div>
    </div>

</template>



<script setup>
import { ref, computed } from 'vue'

// Add these right after imports
const props = defineProps({
    city: String,             // Receive from parent
    weatherData: Object       // Receive from parent
})

const emit = defineEmits(['update-city'])  // For communicating with parent

const suggestions = ref([])
const showSuggestions = ref(false)
const isLoading = ref(false)
const errorMsg = ref('')
const searchQuery = ref('')  // For local search input only


const fetchSuggestions = async () => {
    if (!searchQuery.value) {
        suggestions.value = []
        showSuggestions.value = false
        return
    }

    isLoading.value = true
    errorMsg.value = ''
    suggestions.value = []

    try {
        const res = await fetch(`https://api.weatherapi.com/v1/search.json?key=93c4e89ebb004f31888200554252806&q=${searchQuery.value}`)
        const data = await res.json()
        if (data.length === 0) {
            errorMsg.value = 'No cities found.'
        } else {
            suggestions.value = data
            showSuggestions.value = true
        }
    } catch (err) {
        console.error('Error fetching suggestions:', err)
        errorMsg.value = 'Failed to fetch city suggestions.'
    } finally {
        isLoading.value = false
    }
}


const selectCity = (cityObj) => {
    emit('update-city', cityObj.name);
    searchQuery.value = `${cityObj.name}, ${cityObj.country}`;
    showSuggestions.value = false; // Add this line to hide dropdown immediately
    suggestions.value = []; // Optional: Clear suggestions array
};

const hideSuggestionsWithDelay = () => {
    setTimeout(() => showSuggestions.value = false, 200)
}


const showAlert = () => {
    window.alert('This feature would be available soon 😊')
}

const airQualityPercentage = computed(() => {
    const pm2_5 = props.weatherData?.current?.air_quality?.pm2_5 || 0
    return Math.min((pm2_5 / 100) * 100, 100) // clamp to 100%
})

const airQualityLabel = computed(() => {
    const pm = props.weatherData?.current?.air_quality?.pm2_5 || 0
    if (pm <= 12) return 'Good'
    else if (pm <= 35) return 'Moderate'
    else if (pm <= 55) return 'Unhealthy'
    else return 'Hazardous'
})


const sunrise = computed(() => props.weatherData?.forecast?.forecastday[0]?.astro?.sunrise || 'N/A')
const sunset = computed(() => props.weatherData?.forecast?.forecastday[0]?.astro?.sunset || 'N/A')


</script>
