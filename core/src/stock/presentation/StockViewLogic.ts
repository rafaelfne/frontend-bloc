import { ViewLogic, DataError, IUsecase, TYPES } from "../../common";
import { inject, injectable } from "inversify";
import { TStockState, stockInitialState } from "./StockState";
import { GetStockParams, IStock } from "../domain";

@injectable()
export class StockViewLogic extends ViewLogic<TStockState> {
  constructor(
    @inject(TYPES.IUsecase)
    private getStockUsecase: IUsecase
  ) {
    super(stockInitialState);
  }

  async getStock(params: GetStockParams) {
    this.changeState({ kind: "LoadingStockState" });
    const result = await this.getStockUsecase.execute<DataError, IStock>(params);
    result.fold(
      (error) => this.changeState(this.handleError(error)),
      (stock) => this.changeState({ kind: "LoadedStockState", stock })
    );
  }

  private handleError(error: DataError): TStockState {
    switch (error.kind) {
      case "UnexpectedError": {
        return {
          kind: "ErrorStockState",
          error: "Sorry, an error has ocurred. Please try later again"
        };
      }
    }
  }
}
