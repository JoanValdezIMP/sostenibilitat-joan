<script setup>
import { inject } from 'vue'
import ESGChart from '../components/ESGChart.vue'

// Inyectamos el sistema de traducciones
const t = inject('translate', (key) => key)

// Datos para el gráfico (comparativa simplificada de impactes ASG)
const esgChartData = {
  labels: ['Temu', 'Shein', 'Amazon'],
  datasets: [
    {
      label: 'Impact Score (0-100, 100 peor)',
      data: [95, 70, 40],
      backgroundColor: ['#ef4444', '#a78bfa', '#06b6d4'],
      borderRadius: 8,
      barPercentage: 0.6
    }
  ]
}

const esgChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false } },
  scales: { y: { beginAtZero: true, max: 100 } }
}
</script>
<template>
  <div class="flex flex-col gap-12 lg:gap-16 animation-fade-in w-full">
    
    <section class="text-center mt-8 space-y-4 flex flex-col items-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        {{ t('esg.tag') }}
      </div>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl">
        {{ t('esg.title') }}
      </h1>
      <p class="max-w-2xl text-slate-400 text-lg md:text-xl font-medium mt-4">
        {{ t('esg.hero_subtitle') }}
      </p>
    </section>

    <section class="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl w-full shadow-lg mt-8 p-6">
      <div class="mb-4">
        <h3 class="text-2xl font-bold text-white mb-2">{{ t('esg.table_title') }}</h3>
        <p class="text-slate-400">{{ t('esg.table_subtitle') }}</p>
      </div>
      <div class="h-64">
        <ESGChart :chartData="esgChartData" :chartOptions="esgChartOptions" />
      </div>
    </section>

    <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col group">
        <div class="flex items-center gap-4 mb-6">
          <div class="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <h2 class="text-2xl font-bold text-white">{{ t('esg.env_title') }}</h2>
        </div>
        <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>
            <strong class="text-emerald-400">{{ t('esg.env_sub1') }}</strong> {{ t('esg.env_calc_desc') }}
          </p>
          <div class="p-4 bg-emerald-950/30 border border-emerald-900/50 rounded-xl mt-4">
            <span class="text-emerald-400 font-bold block mb-1">{{ t('esg.env_alert') }}</span>
            <span class="text-slate-400">{{ t('esg.env_alert_desc') }}</span>
          </div>
        </div>
      </div>

      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-purple-500/40 transition-all duration-300 flex flex-col group">
        <div class="flex items-center gap-4 mb-6">
          <div class="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>
          <h2 class="text-2xl font-bold text-white">{{ t('esg.soc_title') }}</h2>
        </div>
        <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>
            <strong class="text-purple-400">{{ t('esg.soc_sub1') }}</strong> {{ t('esg.soc_inv_desc') }}
          </p>
          <div class="p-4 bg-purple-950/30 border border-purple-900/50 rounded-xl mt-4">
            <span class="text-purple-400 font-bold block mb-1">{{ t('esg.soc_alert') }}</span>
            <span class="text-slate-400">{{ t('esg.soc_alert_desc') }}</span>
          </div>
        </div>
      </div>

      <div class="bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-amber-500/40 transition-all duration-300 flex flex-col group">
        <div class="flex items-center gap-4 mb-6">
          <div class="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
          </div>
          <h2 class="text-2xl font-bold text-white">{{ t('esg.gov_title') }}</h2>
        </div>
        <div class="space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>
            <strong class="text-amber-400">{{ t('esg.gov_sub1') }}</strong> {{ t('esg.gov_rest_desc') }}
          </p>
          <div class="p-4 bg-amber-950/30 border border-amber-900/50 rounded-xl mt-4">
            <span class="text-amber-400 font-bold block mb-1">{{ t('esg.gov_alert') }}</span>
            <span class="text-slate-400">{{ t('esg.gov_alert_desc') }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl w-full shadow-lg overflow-hidden mt-8">
      <div class="p-8 border-b border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h3 class="text-2xl font-bold text-white mb-2">{{ t('esg.table_title') }}</h3>
          <p class="text-slate-400">{{ t('esg.table_subtitle') }}</p>
        </div>
        <div class="px-4 py-2 bg-slate-800 rounded-lg text-slate-300 text-sm font-semibold border border-slate-700">
          {{ t('esg.table_badge') }}
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-400">
          <thead class="text-xs text-slate-300 uppercase bg-slate-950/50">
            <tr>
              <th scope="col" class="px-6 py-4 font-semibold">{{ t('esg.th1') }}</th>
              <th scope="col" class="px-6 py-4 font-semibold">{{ t('esg.th2') }}</th>
              <th scope="col" class="px-6 py-4 font-semibold">{{ t('esg.th3') }}</th>
              <th scope="col" class="px-6 py-4 font-semibold">{{ t('esg.th4') }}</th>
              <th scope="col" class="px-6 py-4 font-semibold text-center">{{ t('esg.th5') }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800">
            <tr class="bg-red-500/5 hover:bg-red-500/10 transition-colors">
              <th scope="row" class="px-6 py-4 font-bold text-white flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>Temu
              </th>
              <td class="px-6 py-4">{{ t('esg.t_temu_ship') }}</td>
              <td class="px-6 py-4 text-emerald-400 font-medium">{{ t('esg.t_very_low') }}</td>
              <td class="px-6 py-4">{{ t('esg.t_temu_var') }}</td>
              <td class="px-6 py-4"><div class="flex justify-center"><span class="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30">{{ t('esg.v_high') }}</span></div></td>
            </tr>
            <tr class="hover:bg-slate-800/50 transition-colors">
              <th scope="row" class="px-6 py-4 font-medium text-slate-200">Shein</th>
              <td class="px-6 py-4">{{ t('esg.t_shein_ship') }}</td>
              <td class="px-6 py-4">{{ t('esg.t_low') }}</td>
              <td class="px-6 py-4">{{ t('esg.t_shein_var') }}</td>
              <td class="px-6 py-4"><div class="flex justify-center"><span class="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">{{ t('esg.high') }}</span></div></td>
            </tr>
            <tr class="hover:bg-slate-800/50 transition-colors">
              <th scope="row" class="px-6 py-4 font-medium text-slate-200">Amazon</th>
              <td class="px-6 py-4 text-emerald-400">{{ t('esg.t_amazon_ship') }}</td>
              <td class="px-6 py-4">{{ t('esg.t_med') }}</td>
              <td class="px-6 py-4">{{ t('esg.t_amazon_var') }}</td>
              <td class="px-6 py-4"><div class="flex justify-center"><span class="px-3 py-1 rounded-full text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">{{ t('esg.med_high') }}</span></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</template>