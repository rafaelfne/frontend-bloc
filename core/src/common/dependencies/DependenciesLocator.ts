import { HttpProvider } from '../provider/HttpProvider';
import { Container } from 'inversify';
import { TYPES } from './Types';
import { ViewLogic } from '../presentation';
import { GetStockUsecase, IStockRepository, StockViewLogic, StockRepository, TStockState } from '../../stock';
import { IHttpProvider } from '../domain';
import { IUsecase } from '../usecase';
class DependenciesLocator {
  private container = new Container({
    autoBindInjectable: true
  });

  defineDependencies() {
    this.container.bind<IHttpProvider>(TYPES.IHttpProvider).to(HttpProvider).inSingletonScope();
    this.container.bind<ViewLogic<TStockState>>(TYPES.StockViewLogic).to(StockViewLogic);
    this.container.bind<IUsecase>(TYPES.IUsecase).to(GetStockUsecase).whenInjectedInto(StockViewLogic);
    this.container.bind<IStockRepository>(TYPES.IStockRepository).to(StockRepository);
  }

  get<T>(type: symbol): T {
    return this.container.get<T>(type);
  }
}

export { DependenciesLocator };