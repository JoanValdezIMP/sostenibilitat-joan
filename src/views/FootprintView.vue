<script setup>
import { inject } from 'vue'
import CarbonChart from '../components/CarbonChart.vue'
const footprintChartData = [
  { label: '1 enviament de Temu (1 kg)', value: 4.75, display: '4.75 kg CO₂', color: 'bg-red-500', highlight: true },
  { label: 'Conduir cotxe gasolina (22 milles)', value: 4.60, display: '4.60 kg CO₂', color: 'bg-orange-400' },
  { label: "Bossa de plàstic d'un sol ús", value: 1.58, display: '1.58 kg CO₂', color: 'bg-yellow-400' },
  { label: 'Veure 10 hores de Netflix', value: 0.36, display: '0.36 kg CO₂', color: 'bg-emerald-400' },
]


// Inyectamos el sistema de traducciones
const t = inject('translate', (key) => key)
</script>

<template>
  <div class="flex flex-col gap-12 lg:gap-16 animation-fade-in w-full">
    
    <section class="text-center mt-8 space-y-4 flex flex-col items-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        {{ t('carbon.tag') }}
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl">
        {{ t('carbon.title') }}
      </h1>
      <p class="max-w-2xl text-slate-400 text-lg md:text-xl font-medium mt-4">
        {{ t('carbon.hero_subtitle') }}
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col group">
        <div class="text-cyan-400 mb-4 group-hover:scale-110 transition-transform origin-left">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">{{ t('carbon.scope1_title') }}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ t('carbon.s1_desc') }}</p>
        <div class="mt-auto inline-block px-3 py-1 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-500 font-mono w-fit">{{ t('carbon.impact_low') }}</div>
      </div>

      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col group">
        <div class="text-blue-400 mb-4 group-hover:scale-110 transition-transform origin-left">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">{{ t('carbon.scope2_title') }}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ t('carbon.s2_desc') }}</p>
        <div class="mt-auto inline-block px-3 py-1 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-500 font-mono w-fit">{{ t('carbon.impact_medium') }}</div>
      </div>

      <div class="bg-red-500/5 backdrop-blur-md border border-red-500/30 p-6 rounded-2xl hover:border-red-500/60 hover:bg-red-500/10 transition-all duration-300 flex flex-col group relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-bl-full blur-2xl pointer-events-none"></div>
        <div class="text-red-400 mb-4 group-hover:scale-110 transition-transform origin-left">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">{{ t('carbon.scope3_title') }}</h3>
        <p class="text-red-200/80 text-sm leading-relaxed mb-4">{{ t('carbon.s3_desc') }}</p>
        <div class="mt-auto inline-block px-3 py-1 bg-red-500/20 rounded-lg border border-red-500/30 text-xs text-red-400 font-bold tracking-wider w-fit">{{ t('carbon.impact_critical') }}</div>
      </div>
    </section>

    <section class="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 md:p-8 w-full flex flex-col md:flex-row items-center gap-8">
      <div class="w-full md:w-1/2 space-y-4">
        <h3 class="text-2xl font-bold text-white">{{ t('carbon.logistic_title') }}</h3>
        <p class="text-slate-400 leading-relaxed">{{ t('carbon.logistic_desc') }}</p>
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
          <div class="text-red-400 font-black text-3xl shrink-0">30x</div>
          <p class="text-sm text-slate-300">{{ t('carbon.logistic_fact') }}</p>
        </div>
      </div>
      <div class="w-full md:w-1/2 flex justify-center">
        <div class="flex flex-col gap-6 w-full max-w-sm">
          <div class="flex items-center justify-between">
            <span class="text-slate-300 font-medium">{{ t('carbon.air_label') }}</span>
            <span class="text-red-400 font-bold">~ 500g CO₂ / t-km</span>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-3">
            <div class="bg-red-500 h-3 rounded-full" style="width: 100%"></div>
          </div>
          <div class="flex items-center justify-between mt-2">
            <span class="text-slate-300 font-medium">{{ t('carbon.sea_label') }}</span>
            <span class="text-cyan-400 font-bold">~ 15g CO₂ / t-km</span>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-3">
            <div class="bg-cyan-500 h-3 rounded-full" style="width: 5%"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl w-full shadow-lg">
      <div class="mb-8">
        <h3 class="text-2xl font-bold text-white mb-2">{{ t('carbon.chart_title') }}</h3>
        <p class="text-slate-400">{{ t('carbon.chart_subtitle') }}</p>
      </div>
      <CarbonChart type="horizontal" :data="footprintChartData" :maxValue="5.0" />
    </section>

  </div>
</template>