import { HttpProvider } from '../provider/HttpProvider';
import { Container } from 'inversify';
import { GetStockUsecase, StockViewLogic, StockRepository } from '../../stock';
import { FundViewLogic, FundsRepository, GetFundBuNameUsecase } from '../../funds';
class DependenciesLocator {
    constructor() {
        this.container = new Container({
            autoBindInjectable: true
        });
    }
    defineDependencies() {
        this.container.bind("IHttpProvider").to(HttpProvider).inSingletonScope();
        this.container.bind("StockViewLogic").to(StockViewLogic);
        this.container.bind("IUsecase").to(GetStockUsecase).whenInjectedInto(StockViewLogic);
        this.container.bind("IStockRepository").to(StockRepository);
        this.container.bind("FundViewLogic").to(FundViewLogic);
        this.container.bind("IFundsRepository").to(FundsRepository);
        this.container.bind("IUsecase").to(GetFundBuNameUsecase).whenInjectedInto(FundViewLogic);
        return this.container;
    }
    get(type) {
        return this.container.get(type);
    }
}
export { DependenciesLocator };
//# sourceMappingURL=DependenciesLocator.js.map