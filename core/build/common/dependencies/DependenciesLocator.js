import { HttpProvider } from '../provider/HttpProvider';
import { Container } from 'inversify';
import { TYPES } from './Types';
import { GetStockUsecase, StockViewLogic, StockRepository } from '../../stock';
import { FundViewLogic, FundsRepository, GetFundBuNameUsecase } from '../../funds';
class DependenciesLocator {
    constructor() {
        this.container = new Container({
            autoBindInjectable: true
        });
    }
    defineDependencies() {
        this.container.bind(TYPES.IHttpProvider).to(HttpProvider).inSingletonScope();
        this.container.bind(TYPES.StockViewLogic).to(StockViewLogic);
        this.container.bind(TYPES.IUsecase).to(GetStockUsecase).whenInjectedInto(StockViewLogic);
        this.container.bind(TYPES.IStockRepository).to(StockRepository);
        this.container.bind(TYPES.FundViewLogic).to(FundViewLogic);
        this.container.bind(TYPES.IFundsRepository).to(FundsRepository);
        this.container.bind(TYPES.IUsecase).to(GetFundBuNameUsecase).whenInjectedInto(FundViewLogic);
    }
    get(type) {
        return this.container.get(type);
    }
}
export { DependenciesLocator };
//# sourceMappingURL=DependenciesLocator.js.map