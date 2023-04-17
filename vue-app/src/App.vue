<script setup lang="ts">
import { onMounted } from 'vue';
import { getStockAction, getFundAction } from './actions';
const { getFund, fundState } = getFundAction();

onMounted(() => {
  getFund({ name: 'warren-fic-fim-cp' })
});
</script>

<template>
  <div class="p-4 max-w-7xl mx-auto pt-8">
    <div
      v-if="fundState.kind === 'LoadedFundState'"
      class="divide-y divide-gray-500 py-4"
    >
      <div class="py-4">
        <h1 class="text-2xl font-bold">
          {{ fundState.fund.name }}
        </h1>
        <p class="text-sm text-gray-400">
          {{ fundState.fund.legalName }}
        </p>
      </div>
      <div class="py-4">
        <h5 class="font-bold text-xs">
          CNPJ
        </h5>
        <p>
          {{ fundState.fund.formattedDocument }}
        </p>
      </div>
      <div class="py-4">
        <h3 class="font-bold text-lg">
          Características
        </h3>
        <div class="py-4 grid grid-cols-4 divide-x divide-gray-500">
          <div>
            <h5 class="font-bold text-xs">
              CNPJ
            </h5>
            <p>
              {{ fundState.fund.formattedDocument }}
            </p>
          </div>
          <div class="px-4">
            <h5 class="font-bold text-xs">
              STATUS
            </h5>
            <p>
              {{ fundState.fund.status }}
            </p>
          </div>
        </div>
      </div>
      {{ fundState }}
    </div>
  </div>
</template>
