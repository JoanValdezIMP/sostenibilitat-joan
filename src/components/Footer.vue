<script setup>
import { ref } from 'vue'

// Estado reactivo para el formulario de newsletter
const email = ref('')
const isSubscribed = ref(false)

// Función para simular la suscripción
const subscribe = () => {
  if (email.value.trim() !== '') {
    isSubscribed.value = true
    email.value = ''
    
    // Devolvemos el botón a su estado original tras 4 segundos
    setTimeout(() => {
      isSubscribed.value = false
    }, 4000)
  }
}
</script>

<template>
  <footer class="bg-[#070a13] border-t border-slate-800/60 pt-16 pb-8 w-full mt-12 relative z-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      
      <!-- Bloque de Activismo y Newsletter -->
      <div class="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
        <!-- Decoración de fondo -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-700"></div>

        <div class="w-full md:w-1/2 space-y-4 relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider">
            <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Campanya Activa
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            #Unmute<span class="text-emerald-400">Temu</span>
          </h2>
          <p class="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
            Exigeix transparència climàtica corporativa. Subscriu-te per rebre actualitzacions sobre les auditories independents i l'impacte real de la cadena de subministrament.
          </p>
        </div>

        <div class="w-full md:w-1/2 relative z-10">
          <form @submit.prevent="subscribe" class="flex flex-col sm:flex-row gap-3">
            <div class="relative flex-grow">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <input 
                v-model="email" 
                type="email" 
                required
                placeholder="El teu correu electrònic" 
                class="w-full pl-11 pr-4 py-3 bg-slate-950/80 border border-slate-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-slate-500"
                :disabled="isSubscribed"
              >
            </div>
            <button 
              type="submit" 
              :disabled="isSubscribed"
              class="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] disabled:opacity-50 disabled:cursor-not-allowed shrink-0 flex items-center justify-center min-w-[140px]"
            >
              <span v-if="!isSubscribed">Unir-se ara</span>
              <span v-else class="flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Gràcies!
              </span>
            </button>
          </form>
          <p class="text-xs text-slate-500 mt-3 flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            No compartirem les teves dades. Cancel·la quan vulguis.
          </p>
        </div>
      </div>

      <!-- Separador y Enlaces Legales -->
      <div class="mt-12 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-slate-500 text-sm font-medium flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l.406.34c.536.45.774 1.167.566 1.838l-.11.355a1.125 1.125 0 0 1-1.07.792h-.475a1.125 1.125 0 0 0-1.125 1.125v1.125a1.125 1.125 0 0 1-1.125 1.125H7.5a1.125 1.125 0 0 1-1.125-1.125V12.75A1.125 1.125 0 0 1 7.5 11.625h.625c.34 0 .663-.153.88-.419l.562-.69a1.125 1.125 0 0 1 1.019-.401l.407.06c.41.06.83-.12 1.055-.465l.386-.591a1.125 1.125 0 0 1 .933-.513h1.162a1.125 1.125 0 0 1 .915.474l.447.621c.23.32.583.506.96.506h1.162a1.125 1.125 0 0 1 .929.582l.44.88c.174.348.163.757-.029 1.095l-.311.547a1.125 1.125 0 0 1-.96.582h-.46c-.499 0-.962.272-1.21.714l-.105.19a1.125 1.125 0 0 0 .154 1.318l.811.916c.227.256.346.593.332.932l-.04.975a1.125 1.125 0 0 0 .619 1.023l.492.246a1.125 1.125 0 0 1 .614.992v.013A9.75 9.75 0 1 1 12.75 3.03Z" />
          </svg>
          &copy; 2026 Anàlisi TEMU.eco. Projecte de recerca.
        </div>
        
        <div class="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-slate-500">
          <a href="#" class="hover:text-emerald-400 transition-colors">Metodologia</a>
          <a href="#" class="hover:text-emerald-400 transition-colors">Fonts de Dades</a>
          <a href="#" class="hover:text-emerald-400 transition-colors">Contacte Auditories</a>
        </div>
      </div>
    </div>
  </footer>
</template>