import { DeepReadonly, Plugin, Ref } from 'vue'
import { DependenciesLocator, FundViewLogic, StockViewLogic, TFundState, TStockState } from '!@/build'
import { useViewLogicState } from '../UseViewLogicState'

export interface Dependencies {
  provideStock(): Dependency<StockViewLogic, TStockState>;
  provideFund(): Dependency<FundViewLogic, TFundState>;
}

export interface Dependency<Bloc, State> {
  state: DeepReadonly<Ref<State>>,
  viewLogic: Bloc
}

const dependenciesLocator = new DependenciesLocator()
dependenciesLocator.defineDependencies()

export const dependencies: Dependencies = {
  provideStock(): Dependency<StockViewLogic, TStockState> {
    const viewLogic = dependenciesLocator.get<StockViewLogic>('StockViewLogic')
    const state = useViewLogicState(viewLogic)
    return { viewLogic, state }
  },
  provideFund(): Dependency<FundViewLogic, TFundState> {
    const viewLogic = dependenciesLocator.get<FundViewLogic>('FundViewLogic')
    const state = useViewLogicState(viewLogic)
    return { viewLogic, state }
  }
}

const plugin: Plugin = {
  async install(app) {
    app.provide("dependencies", dependencies)
  },
}

export default plugin
