import { ViewLogic, DataError, IUsecase, TYPES } from "../../common";
import { inject, injectable } from "inversify";
import { TFundState, fundInitialState } from "./FundState";
import { GetFundParams, IFund } from "../domain";

@injectable()
export class FundViewLogic extends ViewLogic<TFundState> {
  constructor(
    @inject(TYPES.IUsecase)
    private getFundUsecase: IUsecase
  ) {
    super(fundInitialState);
  }

  async getFund(params: GetFundParams) {
    this.changeState({ kind: "LoadingFundState" });
    const result = await this.getFundUsecase.execute<DataError, IFund>(params);
    result.fold(
      (error) => this.changeState(this.handleError(error)),
      (fund) => this.changeState({ kind: "LoadedFundState", fund })
    );
  }

  private handleError(error: DataError): TFundState {
    switch (error.kind) {
      case "UnexpectedError": {
        return {
          kind: "ErrorFundState",
          error: "Sorry, an error has ocurred. Please try later again"
        };
      }
    }
  }
}
