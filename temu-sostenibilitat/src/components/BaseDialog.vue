<script setup>
import { onMounted, onUnmounted } from 'vue'

// Definimos el evento 'close' para que el componente padre (HomeView) pueda escucharlo
const emit = defineEmits(['close'])

// Accesibilidad: Cerrar el modal al pulsar la tecla Escape
const handleKeydown = (e) => {
  if (e.key === 'Escape') emit('close')
}

// Bloquear el scroll del body cuando el modal se monta, y restaurarlo al desmontar
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
        
        <!-- Backdrop oscuro con desenfoque (clicable para cerrar) -->
        <div 
          class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
          @click="emit('close')"
        ></div>
        
        <!-- Contenedor del Modal -->
        <div class="bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-2xl w-full shadow-2xl relative transform transition-all">
          
          <!-- Botón de cierre superior (X) -->
          <button 
            @click="emit('close')" 
            class="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Tancar diàleg"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <!-- Etiqueta superior -->
          <div class="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Greenwashing vs. Realitat
          </div>
          
          <!-- Titular Principal -->
          <h3 class="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight">
            El Programa de Plantació d'Arbres: <br/>
            <span class="text-emerald-400">Impacte o Distracció?</span>
          </h3>
          
          <!-- Cuerpo de texto dividido en bloques -->
          <div class="space-y-6 text-slate-300 text-sm md:text-base leading-relaxed">
            
            <!-- Bloque 1: El programa -->
            <div class="p-5 bg-slate-800/50 border border-slate-700 rounded-2xl">
              <h4 class="text-white font-bold mb-2 flex items-center gap-2">
                <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                L'Aliança amb "Trees for the Future"
              </h4>
              <p>
                La plataforma destaca la seva col·laboració amb aquesta ONG, anunciant el finançament de més de <strong>25 milions d'arbres</strong>. No obstant això, aquest cost sovint és delegat i finançat directament pels mateixos usuaris mitjançant microdonacions durant el procés de pagament (checkout).
              </p>
            </div>

            <!-- Bloque 2: La Crítica (Denuncia) -->
            <div class="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl relative overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <h4 class="text-red-400 font-bold mb-2 flex items-center gap-2 relative z-10">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                La Crítica: Tàctica de Camuflatge
              </h4>
              <p class="relative z-10">
                Agències de qualificació ètica i sostenibilitat, com <strong>Good On You</strong>, assenyalen que aquest programa actua com una cortina de fum mediàtica. L'objectiu principal seria distreure l'atenció pública de l'impacte real: <strong>840 milions de paquets anuals</strong> viatjant en avió i milions de tones de polièster no reciclable que acaben saturant els abocadors.
              </p>
            </div>

          </div>
          
          <!-- Botón de acción inferior -->
          <div class="mt-8 flex justify-end">
            <button 
              @click="emit('close')" 
              class="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
            >
              Tancar anàlisi
            </button>
          </div>
          
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Clases de Vue Transition para suavizar la entrada y salida */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .transform,
.modal-leave-active .transform {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-enter-from .transform,
.modal-leave-to .transform {
  transform: scale(0.95) translateY(10px);
}
</style>