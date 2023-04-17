import { GetFundParams } from "!@/build";
import { dependencies } from "@/common/dependencies";
import { ref } from "vue";

export const getFundAction = () => {
  const { state, bloc } = dependencies.provideFund()
  const getFundParams = ref({
    name: "",
  } as GetFundParams)
  return {
    fundState: state,
    getFundParams,
    getFund: (params: GetFundParams) => bloc.getFund(params)
  };
}