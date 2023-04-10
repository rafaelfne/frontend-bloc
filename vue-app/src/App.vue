<script setup lang="ts">
import { onMounted } from 'vue';
import { getStockAction } from './actions';
const { getStock, stockState } = getStockAction();

onMounted(() => {
  getStock({ symbol: 'AAPL', interval: '1m' });
});
</script>

<template>
  <div>
    Vue APP
    {{ stockState }}
  </div>
</template>
