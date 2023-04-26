import { GetFundParams } from "!@/build";
import { dependencies } from "@/common/dependencies";
import { ref } from "vue";

export const getFundAction = () => {
  const { state, viewLogic } = dependencies.provideFund()
  const getFundParams = ref({
    name: "",
  } as GetFundParams)
  return {
    fundState: state,
    getFundParams,
    getFund: (params: GetFundParams) => viewLogic.getFund(params)
  };
}