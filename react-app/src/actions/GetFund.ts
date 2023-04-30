import { GetFundParams } from "!@/build";
import { dependencies } from "@/common/dependencies";

export const getFundAction = () => {
  const { state, viewLogic } = dependencies.provideFund()
  const getFundParams = {
    name: "",
  } as GetFundParams
  return {
    fundState: state,
    getFundParams,
    getFund: (params: GetFundParams) => viewLogic.getFund(params)
  };
}