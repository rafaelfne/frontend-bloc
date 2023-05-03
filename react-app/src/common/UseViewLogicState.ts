import { ViewLogic } from '!@/build'
import { useCallback, useState, useMemo } from 'react'
export function useViewLogicState<S>(viewLogic: ViewLogic<S>): S {
  const [state, setState] = useState<S>(viewLogic.state)
  const stateSubscription = useCallback((newState: S) => {
    setState(newState)
  }, [])
  useMemo(() => {
    viewLogic.subscribe(stateSubscription)
    return () => {
      viewLogic.unsubscribe(stateSubscription)
    }
  }, [viewLogic, stateSubscription])
  return state
}