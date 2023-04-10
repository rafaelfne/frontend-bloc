import { HttpProvider } from '../provider/HttpProvider';
import { Container } from 'inversify';
import { TYPES } from './Types';
import { GetStockUsecase, StockViewLogic, StockRepository } from '../../stock';
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
    }
    get(type) {
        return this.container.get(type);
    }
}
export { DependenciesLocator };
//# sourceMappingURL=DependenciesLocator.js.map