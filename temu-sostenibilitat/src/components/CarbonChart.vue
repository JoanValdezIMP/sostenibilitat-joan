<script setup>
import { computed } from 'vue'

// Definimos las propiedades (props) para que el componente sea 100% reutilizable
const props = defineProps({
  type: {
    type: String,
    default: 'vertical', // 'vertical' o 'horizontal'
  },
  data: {
    type: Array,
    required: true,
    // Ejemplo: [{ label: '2023', value: 1.1, display: '1.1M t', color: 'bg-emerald-500' }]
  },
  maxValue: {
    type: Number,
    required: true,
  }
})

// Función para calcular el porcentaje de llenado de cada barra
const calculatePercentage = (value) => {
  return Math.min(Math.max((value / props.maxValue) * 100, 5), 100) // Mínimo 5% para que siempre se vea algo
}
</script>

<template>
  <div class="w-full">
    
    <!-- MODO VERTICAL (Ej: Evolución de emisiones por año) -->
   <div 
      v-if="type === 'vertical'" 
      class="h-64 w-full border border-dashed border-slate-700 rounded-xl flex items-end justify-around px-2 sm:px-8 pt-12 pb-4 relative overflow-hidden bg-gradient-to-t from-slate-950/80 to-transparent"
    >
      <div 
        v-for="(item, index) in data" 
        :key="index"
        class="flex flex-col justify-end items-center gap-2 z-10 w-1/5 h-full group cursor-pointer"
      >
        <!-- Valor superior -->
        <div 
          class="font-bold text-sm transition-transform group-hover:-translate-y-1 mb-1 select-none"
          :class="item.highlight ? 'text-red-400 font-black' : 'text-slate-300'"
        >
          {{ item.display }}
        </div>
        
        <!-- Barra (Ajustada con altura mínima y flex shrink) -->
        <div 
          class="w-full rounded-t-md transition-all duration-700 ease-out group-hover:brightness-125 shrink-0"
          :class="[item.color, item.highlight ? 'shadow-[0_0_15px_rgba(239,68,68,0.4)]' : '']"
          :style="{ height: `${calculatePercentage(item.value)}%` }"
        ></div>
        
        <!-- Etiqueta inferior (Año) -->
        <div 
          class="text-xs font-mono mt-1"
          :class="item.highlight ? 'text-white font-bold' : 'text-slate-500'"
        >
          {{ item.label }}
        </div>
      </div>
    </div>

    <!-- MODO HORIZONTAL (Ej: Comparativa de impacto cotidiano) -->
    <div v-else-if="type === 'horizontal'" class="space-y-6 relative pb-4">
      <div 
        v-for="(item, index) in data" 
        :key="index"
        class="relative z-10 group"
      >
        <!-- Textos sobre la barra -->
        <div class="flex justify-between text-sm mb-1">
          <span 
            class="transition-colors"
            :class="item.highlight ? 'text-white font-semibold' : 'text-slate-300 group-hover:text-slate-200'"
          >
            {{ item.label }}
          </span>
          <span 
            class="font-medium"
            :class="item.highlight ? 'text-red-400 font-bold' : 'text-slate-400'"
          >
            {{ item.display }}
          </span>
        </div>
        
        <!-- Barra -->
        <div class="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
          <div 
            class="h-4 rounded-full transition-all duration-1000 ease-out group-hover:brightness-110"
            :class="[item.color, item.highlight ? 'shadow-[0_0_10px_rgba(239,68,68,0.5)]' : '']"
            :style="{ width: `${calculatePercentage(item.value)}%` }"
          ></div>
        </div>
      </div>
    </div>

  </div>
</template>