import { DeepReadonly, Plugin, Ref } from 'vue'
import { DependenciesLocator, StockViewLogic, TStockState, TYPES } from '!@/build'
import { useViewLogicState } from '../UseViewLogicState'

export interface Dependencies {
  provideStock(): Dependency<StockViewLogic, TStockState>;
}

export interface Dependency<Bloc, State> {
  state: DeepReadonly<Ref<State>>,
  bloc: Bloc
}

const dependenciesLocator = new DependenciesLocator()
dependenciesLocator.defineDependencies()

export const dependencies: Dependencies = {
  provideStock(): Dependency<StockViewLogic, TStockState> {
    const viewLogic = dependenciesLocator.get<StockViewLogic>(TYPES.StockViewLogic)
    const state = useViewLogicState(viewLogic)
    return { bloc: viewLogic, state }
  }
}

const plugin: Plugin = {
  async install(app) {
    app.provide("dependencies", dependencies)
  },
}

export default plugin
