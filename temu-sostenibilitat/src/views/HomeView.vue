<script setup>
import { inject, ref } from 'vue'

// Inyectamos la función de traducción global
const t = inject('translate', (key) => key)

// Variable reactiva para controlar la apertura del modal (BaseDialog)
const showModal = ref(false)
</script>

<template>
  <div class="flex flex-col gap-12 lg:gap-16 animation-fade-in w-full">
    
    <!-- 1. SECCIÓN HERO -->
    <section class="text-center mt-8 space-y-6 flex flex-col items-center">
      <!-- Etiqueta superior -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        E-Commerce & Impacte Global
      </div>
      
      <!-- Titular principal -->
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
        Temu: El cost mediambiental del <br class="hidden md:block"/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Fast-Shipping</span>
      </h1>
      
      <!-- Subtitular con datos de contexto -->
      <p class="max-w-2xl text-slate-400 text-lg md:text-xl font-medium">
        El fenomen global de PDD Holdings: més de <span class="text-slate-200">416 milions d'usuaris actius</span> i un volum d'enviaments sense precedents en l'era digital.
      </p>
    </section>

    <!-- 2. BLOQUE DE CONTEXTO FINANCIERO (2026) -->
    <section class="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto w-full shadow-lg hover:border-slate-700 transition-colors">
      <div class="flex flex-col md:flex-row items-start gap-5">
        <div class="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shrink-0">
          <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-white mb-3">Context Financer i de Mercat (Actualitat 2026)</h3>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed">
            La matriu PDD Holdings va registrar ingressos de <strong>106.000 milions de iens</strong> en el primer trimestre de 2026. No obstant això, el seu benefici net es va desplomar un <span class="text-red-400 font-bold">15%</span> a causa de la ferotge competència interna a la Xina i a multes reguladores històriques. Aquesta pressió força l'empresa a dependre encara més de l'agressiva expansió internacional de Temu.
          </p>
        </div>
      </div>
    </section>

    <!-- 3. BENTO GRID / TARJETAS DE MÉTRICAS -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      
      <!-- Tarjeta 1: Volumen -->
      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between group">
        <div class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 group-hover:text-emerald-400 transition-colors">Volum d'Enviaments</div>
        <div>
          <div class="text-4xl font-black text-white mb-2">2.3M</div>
          <div class="text-sm text-slate-400">paquets diaris enviats a nivell global el 2026.</div>
        </div>
      </div>

      <!-- Tarjeta 2: Ventas GMV -->
      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between group">
        <div class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 group-hover:text-emerald-400 transition-colors">Vendes (GMV)</div>
        <div>
          <div class="text-4xl font-black text-white mb-2">$70.8B</div>
          <div class="text-sm text-slate-400"><span class="text-emerald-400 font-bold">+293%</span> de creixement interanual.</div>
        </div>
      </div>

      <!-- Tarjeta 3: Transparencia -->
      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-red-500/40 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between group">
        <div class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 group-hover:text-red-400 transition-colors">Transparència</div>
        <div>
          <div class="text-4xl font-black text-red-400 mb-2">0%</div>
          <div class="text-sm text-slate-400">No publica informes de sostenibilitat ni d'emissions.</div>
        </div>
      </div>

      <!-- Tarjeta 4: ESG Score -->
      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-orange-500/40 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between group">
        <div class="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-6 group-hover:text-orange-400 transition-colors">S&P Global ESG Score</div>
        <div>
          <div class="text-4xl font-black text-orange-400 mb-2">8 <span class="text-xl text-slate-500">/ 100</span></div>
          <div class="text-sm text-slate-400">Retailing (Maig 2026). Basat en modelatge extern.</div>
        </div>
      </div>

    </section>

    <!-- 4. LLAMADA A LA ACCIÓN (CTA) -->
    <section class="text-center mt-4 mb-8">
      <button 
        @click="showModal = true" 
        class="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-950 transition-all duration-300 bg-emerald-400 border border-transparent rounded-full hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-slate-900 shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)]">
        <span>Obrir Anàlisi de Silenci Climàtic</span>
        <svg class="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
      </button>
    </section>
    
    <!-- 5. DIÁLOGO MODAL TEMPORAL (Se integrará BaseDialog.vue aquí) -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm px-4 transition-opacity" @click.self="showModal = false">
        <div class="bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-lg w-full shadow-2xl relative transform transition-all">
          <button @click="showModal = false" class="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div class="mb-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">Greenwashing vs. Realitat</div>
          <h3 class="text-2xl font-bold text-white mb-4">El Programa "Trees for the Future"</h3>
          <p class="text-slate-300 text-sm leading-relaxed mb-6">
            Aquest component de demostració serà substituït pel teu component oficial <strong>BaseDialog.vue</strong>. Servirà per contrastar els 25 milions d'arbres plantats amb l'impacte real dels milions de tones de CO2 emeses pel seu transport aeri intensiu.
          </p>
          <div class="flex justify-end gap-3">
            <button @click="showModal = false" class="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors">Tancar</button>
          </div>
        </div>
      </div>
    </Teleport>

  </div>
</template>