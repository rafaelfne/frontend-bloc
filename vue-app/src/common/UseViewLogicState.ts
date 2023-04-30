import { ViewLogic } from '!@/build'
import { DeepReadonly, onMounted, onUnmounted, readonly, Ref, ref } from 'vue'
export function useViewLogicState<S>(viewLogic: ViewLogic<S>): DeepReadonly<Ref<S>> {
  const state = ref(viewLogic.state) as Ref<S>
  const stateSubscription = (newState: S) => {
    state.value = newState
  }
  onMounted(() => {
    viewLogic.subscribe(stateSubscription)
  })
  onUnmounted(() => {
    viewLogic.unsubscribe(stateSubscription)
  })
  return readonly(state)
}