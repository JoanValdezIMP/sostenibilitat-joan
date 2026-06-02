<script setup>
import { ref, provide, computed } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import sourceLanguages from './languages.json'

// 1. Estado global del idioma (por defecto catalán, según los mínimos)
const locale = ref('ca')

// 2. Diccionario reactivo computado según el idioma seleccionado
const translations = computed(() => {
  return sourceLanguages[locale.value] || sourceLanguages['ca']
})

// 3. Función global de traducción (t) para buscar por claves (ej: 'home.title')
const translate = (keyPath) => {
  const keys = keyPath.split('.')
  let current = translations.value
  
  for (const key of keys) {
    if (current && current[key] !== undefined) {
      current = current[key]
    } else {
      return keyPath // Si no encuentra la clave, muestra el path para debug
    }
  }
  return current
}

// 4. Proveer de forma global a toda la SPA (Navbar, Footer y Vistas)
provide('locale', locale)
provide('translate', translate)
</script>

<template>
  <div class="min-h-screen bg-[#070a13] text-slate-100 flex flex-col font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
    
    <Navbar />

    <main class="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto z-10">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style>
/* Reset estructural global y scrollbar estilizada estilo SaaS moderno */
body {
  margin: 0;
  background-color: #070a13;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #070a13;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #334155;
}
</style>