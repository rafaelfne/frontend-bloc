import { GetStockParams } from "!@/build";
import { dependencies } from "@/common/dependencies";
import { ref } from "vue";

export const getStockAction = () => {
  const { state, bloc } = dependencies.provideStock()
  const getStockParams = ref({
    symbol: "",
    interval: "1d",
    range: "1mo"
  } as GetStockParams)
  return {
    stockState: state,
    getStockParams,
    getStock: (params: GetStockParams) => bloc.getStock({ ...params, ...{ interval: "1d", range: "1mo" } })
  };
}
