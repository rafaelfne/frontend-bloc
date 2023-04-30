import React from 'react'
import './App.css'
import { getFundAction } from './actions'

function App() {
  const { fundState, getFund } = getFundAction()
  React.useEffect(() => {
    getFund({ name: 'warren-fic-fim-cp' }) 
  }, [])
  return (
    <div className="App">
      { fundState.kind === 'LoadedFundState' ? (fundState.fund.name) : 'Loading...' }
    </div>
  )
}

export default App
