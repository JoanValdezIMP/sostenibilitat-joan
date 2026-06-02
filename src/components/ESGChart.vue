<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  chartData: { type: Object, required: true },
  chartOptions: { type: Object, default: () => ({}) }
})

const canvasRef = ref(null)
let chartInstance = null

const renderChart = () => {
  if (!canvasRef.value) return
  if (chartInstance) chartInstance.destroy()
  chartInstance = new Chart(canvasRef.value.getContext('2d'), {
    type: 'bar',
    data: props.chartData,
    options: props.chartOptions
  })
}

onMounted(() => {
  renderChart()
})

watch(() => props.chartData, () => {
  renderChart()
}, { deep: true })

onBeforeUnmount(() => {
  if (chartInstance) chartInstance.destroy()
})
</script>

<template>
  <div class="w-full h-full">
    <canvas ref="canvasRef" style="width:100%;height:100%"></canvas>
  </div>
</template>

<style scoped>
.w-full { width: 100%; }
.h-full { height: 100%; }
</style>
