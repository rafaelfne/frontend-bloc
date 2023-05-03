<script setup lang="ts">
import { onMounted } from 'vue';
import { getFundAction } from './actions';
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
          <div class="px-4">
            <h5 class="font-bold text-xs">
              Status
            </h5>
            <p>
              {{ fundState.fund.status }}
            </p>
          </div>
          <div class="px-4">
            <h5 class="font-bold text-xs">
              Início
            </h5>
            <p>
              {{ fundState.fund.initialDate }}
            </p>
          </div>
          <div class="px-4">
            <h5 class="font-bold text-xs">
              Benchmark
            </h5>
            <p>
              {{ fundState.fund.benchmark }}
            </p>
          </div>
          <div class="px-4">
            <h5 class="font-bold text-xs">
              Número de cotistas
            </h5>
            <p>
              {{ fundState.fund.shareholderQuantity }}
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 divide-x divide-gray-500 py-4">
        <div>
          <h3 class="font-bold text-lg">
            Rentabilidade
          </h3>
          <div class="py-4 grid grid-cols-2 divide-x divide-gray-500">
            <div class="px-4">
              <h5 class="font-bold text-xs">
                Mês
              </h5>
              <p>
                {{ fundState.fund.statistics.monthlyReturnFormatted }}
              </p>
            </div>
            <div class="px-4">
              <h5 class="font-bold text-xs">
                Ano
              </h5>
              <p>
                {{ fundState.fund.statistics.annualReturnFormatted }}
              </p>
            </div>
          </div>
        </div>
        <div class="px-4">
          <h3 class="font-bold text-lg">
            Estatísticas
          </h3>
          <div class="py-4 grid grid-cols-3 divide-x divide-gray-500">
            <div class="px-4">
              <h5 class="font-bold text-xs">
                PL. Médio de 12 Meses
              </h5>
              <p>
                {{ fundState.fund.statistics.past12MonthsAverageNetTotalValueFormatted }}
              </p>
            </div>
            <div class="px-4">
              <h5 class="font-bold text-xs">
                Vol. 12 Meses
              </h5>
              <p>
                {{ fundState.fund.statistics.past12MonthsVolatilityFormatted }}
              </p>
            </div>
            <div class="px-4">
              <h5 class="font-bold text-xs">
                Sharpe
              </h5>
              <p>
                {{ fundState.fund.statistics.sharpeRatioFormatted }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
