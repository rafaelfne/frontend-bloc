import { HttpProvider } from '../provider/HttpProvider';
import { Container } from 'inversify';
import { ViewLogic } from '../presentation';
import { GetStockUsecase, IStockRepository, StockViewLogic, StockRepository, TStockState } from '../../stock';
import { IHttpProvider } from '../domain';
import { IUsecase } from '../usecase';
import { FundViewLogic, FundsRepository, GetFundBuNameUsecase, IFundsRepository, TFundState } from '../../funds';
class DependenciesLocator {
  private container = new Container({
    autoBindInjectable: true
  });

  defineDependencies() {
    this.container.bind<IHttpProvider>("IHttpProvider").to(HttpProvider).inSingletonScope();
    this.container.bind<ViewLogic<TStockState>>("StockViewLogic").to(StockViewLogic);
    this.container.bind<IUsecase>("IUsecase").to(GetStockUsecase).whenInjectedInto(StockViewLogic);
    this.container.bind<IStockRepository>("IStockRepository").to(StockRepository);
    this.container.bind<ViewLogic<TFundState>>("FundViewLogic").to(FundViewLogic);
    this.container.bind<IFundsRepository>("IFundsRepository").to(FundsRepository);
    this.container.bind<IUsecase>("IUsecase").to(GetFundBuNameUsecase).whenInjectedInto(FundViewLogic);
    return this.container;
  }

  get<T>(type: string): T {
    return this.container.get<T>(type);
  }
}

export { DependenciesLocator };