<script setup>
import { inject } from 'vue'
import CarbonChart from '../components/CarbonChart.vue'
const climateChartData = [
  { label: '2023', value: 1.1, display: '1.1M t', color: 'bg-emerald-500/40' },
  { label: '2024', value: 4.3, display: '4.3M t', color: 'bg-yellow-500/50' },
  { label: '2025', value: 4.9, display: '4.9M t', color: 'bg-orange-500/60' },
  { label: '2026', value: 5.5, display: '5.5M t', color: 'bg-red-500/80', highlight: true },
]
// Inyectamos el sistema de traducciones
const t = inject('translate', (key) => key)
</script>

<template>
  <div class="flex flex-col gap-12 lg:gap-16 animation-fade-in w-full">
    
    <section class="text-center mt-8 space-y-4 flex flex-col items-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
        {{ t('climate.tag') }}
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl">
        {{ t('climate.title') }}
      </h1>
      <p class="max-w-2xl text-slate-400 text-lg md:text-xl font-medium mt-4">
        {{ t('climate.hero_subtitle') }}
      </p>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-orange-500/40 transition-all duration-300 flex flex-col h-full group">
        <div class="flex items-center gap-4 mb-6">
          <div class="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
          </div>
          <h2 class="text-2xl font-bold text-white">{{ t('climate.legal_title') }}</h2>
        </div>
        <h3 class="text-orange-400 font-semibold mb-3">{{ t('climate.transition_title') }}</h3>
        <p class="text-slate-300 leading-relaxed mb-4">
          {{ t('climate.legal_desc') }}
        </p>
        <div class="mt-auto p-4 bg-slate-950/50 rounded-xl border border-slate-800">
          <p class="text-sm text-slate-400">
            <span class="text-white font-bold">{{ t('climate.legal_consequence_tag') }}</span> {{ t('climate.legal_consequence') }}
          </p>
        </div>
      </div>

      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full group">
        <div class="flex items-center gap-4 mb-6">
          <div class="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
          </div>
          <h2 class="text-2xl font-bold text-white">{{ t('climate.ai_title') }}</h2>
        </div>
        <p class="text-slate-300 leading-relaxed mb-4">
          {{ t('climate.ai_platform_desc') }}
        </p>
        <div class="mt-auto grid grid-cols-2 gap-4">
          <div class="p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-center">
            <div class="text-2xl font-black text-blue-400 mb-1">1.8%</div>
            <div class="text-xs text-slate-400 uppercase tracking-wider">{{ t('climate.ai_metric') }}</div>
          </div>
          <div class="p-4 bg-slate-950/50 rounded-xl border border-slate-800 text-center flex items-center justify-center">
            <div class="text-xs text-slate-400">{{ t('climate.ai_footer') }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl w-full shadow-lg">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h3 class="text-2xl font-bold text-white mb-2">{{ t('climate.chart_title') }}</h3>
          <p class="text-slate-400">{{ t('climate.chart_subtitle') }}</p>
        </div>
        <div class="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-semibold">
          {{ t('climate.chart_badge') }}
        </div>
      </div>
      <CarbonChart type="vertical" :data="climateChartData" :maxValue="5.5" />
    </section>

  </div>
</template>