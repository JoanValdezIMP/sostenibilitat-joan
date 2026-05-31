<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

// Inyectamos el estado global del idioma y los textos compartidos
// Proporcionados desde el App.vue o manejados de forma reactiva
const locale = inject('locale', 'ca')
const t = inject('translate', (key) => key)

const toggleIdioma = () => {
  locale.value = locale.value === 'ca' ? 'es' : 'ca'
}
</script>

<template>
  <nav class="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-7xl h-16 bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-full flex items-center justify-between px-6 z-50 shadow-2xl transition-all duration-300">
    
    <div class="text-white font-extrabold tracking-wider text-sm lg:text-base flex items-center gap-2 shrink-0 select-none">
      <svg class="w-5 h-5 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l.406.34c.536.45.774 1.167.566 1.838l-.11.355a1.125 1.125 0 0 1-1.07.792h-.475a1.125 1.125 0 0 0-1.125 1.125v1.125a1.125 1.125 0 0 1-1.125 1.125H7.5a1.125 1.125 0 0 1-1.125-1.125V12.75A1.125 1.125 0 0 1 7.5 11.625h.625c.34 0 .663-.153.88-.419l.562-.69a1.125 1.125 0 0 1 1.019-.401l.407.06c.41.06.83-.12 1.055-.465l.386-.591a1.125 1.125 0 0 1 .933-.513h1.162a1.125 1.125 0 0 1 .915.474l.447.621c.23.32.583.506.96.506h1.162a1.125 1.125 0 0 1 .929.582l.44.88c.174.348.163.757-.029 1.095l-.311.547a1.125 1.125 0 0 1-.96.582h-.46c-.499 0-.962.272-1.21.714l-.105.19a1.125 1.125 0 0 0 .154 1.318l.811.916c.227.256.346.593.332.932l-.04.975a1.125 1.125 0 0 0 .619 1.023l.492.246a1.125 1.125 0 0 1 .614.992v.013A9.75 9.75 0 1 1 12.75 3.03Z" />
      </svg>
      TEMU<span class="text-emerald-400 font-medium text-xs tracking-normal bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">ECO</span>
    </div>

    <div class="flex items-center gap-3 lg:gap-6 text-xs font-medium">
      <RouterLink 
        to="/" 
        class="text-slate-400 hover:text-emerald-400 transition-colors duration-200 py-1" 
        active-class="text-emerald-400 font-semibold">
        Home
      </RouterLink>
      
      <RouterLink 
        to="/climate" 
        class="text-slate-400 hover:text-emerald-400 transition-colors duration-200 py-1" 
        active-class="text-emerald-400 font-semibold">
        Canvi Climàtic
      </RouterLink>
      
      <RouterLink 
        to="/footprint" 
        class="text-slate-400 hover:text-emerald-400 transition-colors duration-200 py-1" 
        active-class="text-emerald-400 font-semibold">
        Petjada
      </RouterLink>
      
      <RouterLink 
        to="/esg" 
        class="text-slate-400 hover:text-emerald-400 transition-colors duration-200 py-1" 
        active-class="text-emerald-400 font-semibold">
        ASG
      </RouterLink>
    </div>

    <button 
      @click="toggleIdioma" 
      class="bg-slate-900 text-slate-300 border border-slate-800 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500 transition-all duration-200 active:scale-95 shrink-0 uppercase tracking-wider">
      {{ locale === 'ca' ? 'es' : 'ca' }}
    </button>
  </nav>
</template>