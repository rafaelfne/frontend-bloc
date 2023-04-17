const TYPES = {
  IHttpProvider: Symbol.for("IHttpProvider"),
  IStockRepository: Symbol.for("IStockRepository"),
  IUsecase: Symbol.for("IUsecase"),
  IUsecaseCallback: Symbol.for("IUsecaseCallback"),
  StockViewLogic: Symbol.for("StockViewLogic"),
  ViewLogic: Symbol.for("ViewLogic"),
  IFundsRepository: Symbol.for("IFundsRepository"),
  FundViewLogic: Symbol.for("FundViewLogic")
};

export { TYPES };