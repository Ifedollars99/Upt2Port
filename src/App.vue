<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <aside :class="[
      'bg-white py-7 px-2 absolute inset-y-0 left-0 transform transition-all duration-300 ease-in-out z-50 flex flex-col',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      expanded ? 'w-64' : 'w-20',
      'md:relative md:translate-x-0',
    ]">
      <!-- Close button (mobile only) -->
      <button v-if="sidebarOpen && !isDesktop" @click="sidebarOpen = false"
        class="self-end mb-4 mr-2 text-3xl font-bold md:hidden focus:outline-none" aria-label="Close sidebar">
        ×
      </button>

      <!-- Sidebar content -->
      <nav class="flex-1">

        <div class="flex flex-row gap-4">
          <button v-if="isDesktop" @click="expanded = !expanded" class=" flex justify-start text-2xl"
            :aria-label="expanded ? 'Collapse sidebar' : 'Expand sidebar'">
            <span v-if="expanded">☰</span>
            <span v-else>☰</span>
          </button>
          <div class="flex flex-row gap-2">
            <img class="w-10 h-10" src="https://cdn.worldvectorlogo.com/logos/youtube-icon-5.svg" alt="Youtube logo">
            <h1 icon="home" label="Home" :collapsed="!expanded" class="text-black text-2xl">Ifedollars Movies </h1>
          </div>
        </div>
        <!-- Your Date Display -->
        <div class="text-center mb-6">
          {{
            new Date().toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </div>
        <hr class="my-4" />

        <!-- home -->
        <div class="flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2 cursor-pointer" @click="reloadPage">
          <i class="bi bi-house-door-fill text-xl"></i>
          <h1 v-if="expanded" class="text-lg font-medium">
            Home
          </h1>
        </div>

        <!-- shorts -->
        <div class="flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2">
          <i class="bi bi-tiktok text-xl"></i>
          <h1 v-if="expanded" icon="clock" label="History" class="text-lg font-normal">
            Shorts
          </h1>
        </div>
        <!-- susscriptions -->
        <div class="flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2">
          <i class="bi bi-fast-forward-btn text-xl"></i>
          <h1 v-if="expanded" icon="clock" label="History" class="text-lg font-normal">
            Subscriptions
          </h1>
        </div>
        <hr class="my-4" />
        <!-- You -->
        <div class=" flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2">
          <h1 class="text-lg font-bold">
            You
          </h1>
          <h1 class="text-lg font-medium">
            >
          </h1>
        </div>
        <!-- history -->
        <div class="flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2">
          <i class="bi bi-stopwatch text-xl font-bold"></i>
          <h1 v-if="expanded" icon="clock" label="History" class="text-lg font-normal">
            History
          </h1>
        </div>
        <div class="flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2">
          <i class="bi bi-collection-play text-xl"></i>
          <h1 v-if="expanded" icon="clock" label="History" class="text-lg font-normal">
            Playlist
          </h1>
        </div>
        <div class="flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2">
          <i class="bi bi-play-btn text-xl"></i>
          <h1 v-if="expanded" icon="clock" label="History" class="text-lg font-normal">
            Your Videos
          </h1>
        </div>
        <div class="flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2">
          <i class="bi bi-clock text-xl"></i>
          <h1 v-if="expanded" icon="clock" label="History" class="text-lg font-normal">
            Watch Later
          </h1>
        </div>
        <div class="flex flex-row gap-3 hover:bg-gray-200 rounded-xl p-2">
          <i class="bi bi-hand-thumbs-up text-xl"></i>
          <h1 v-if="expanded" icon="clock" label="History" class="text-lg font-normal">
            Liked
          </h1>
        </div>
        <SidebarItem icon="thumb-up" label="Liked Videos" :collapsed="!expanded" />
        <SidebarItem icon="film" label="Your Videos" :collapsed="!expanded" />
      </nav>

      <!-- Desktop expand/collapse toggle -->

    </aside>

    <!-- Main content area -->
    <div class="flex-1 flex flex-col">

      <div class="flex flex-row gap-4">
        <!-- Hamburger (mobile only, shows only if sidebar closed) -->
        <button v-if="!sidebarOpen" @click="sidebarOpen = true"
          class="text-gray-600 text-2xl focus:outline-none flex justify-start" aria-label="Open sidebar">
          ☰
        </button>
        <!-- ife -->
          <div class=" md:hidden">
        <div class="flex flex-row gap-2 ">
          <img class="w-10 h-10" src="https://cdn.worldvectorlogo.com/logos/youtube-icon-5.svg" alt="Youtube logo">
          <h1 icon="home" label="Home" :collapsed="!expanded" class="text-black text-2xl">Ifedollars Movies </h1>
        </div>
      </div>
    </div>
    <!-- search -->
    <div class="pt-20">
      <SearchField />
    </div>
    <main class="flex-1 p-4 overflow-auto">
      <!-- Search -->
      <!-- ShowCase -->
      <div>
        <ShowCase />
      </div>
    </main>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SearchField from './components/SearchField.vue'
import ShowCase from './components/ShowCase.vue'

const sidebarOpen = ref(false) // For mobile sidebar open/close
const expanded = ref(true) // For desktop sidebar wide/collapsed

// Detect desktop or mobile for toggle behavior
const isDesktop = ref(window.innerWidth >= 768)
function reloadPage() {
  window.location.reload()
}

function onResize() {
  isDesktop.value = window.innerWidth >= 768
  if (isDesktop.value) {
    sidebarOpen.value = true
  } else {
    sidebarOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', onResize)
  onResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<script>
// SidebarItem component with icon + label, supports collapsed mode showing only icon
export default {
  components: {
    SidebarItem: {
      props: {
        icon: String,
        label: String,
        collapsed: Boolean,
      },
      computed: {
        iconMap() {
          return {
            home: '🏠',
            fire: '🔥',
            collection: '📺',
            clock: '⏰',
            'thumb-up': '👍',
            film: '🎬',
          }
        },
      },
      template: `
        <a href="#" class="flex items-center space-x-3 px-4 py-2 rounded hover:bg-gray-100">
          <span class="text-xl">{{ iconMap[icon] }}</span>
          <span v-if="!collapsed" class="text-gray-800 font-medium">{{ label }}</span>
        </a>
      `,
    },
  },
}
</script>

<style scoped>
aside {
  transition-property: transform, width;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
</style>
