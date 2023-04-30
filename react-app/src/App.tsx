import React from 'react'
import './App.css'
import { getFundAction } from './actions'

function App() {
  const { fundState, getFund } = getFundAction()
  React.useEffect(() => {
    getFund({ name: 'warren-fic-fim-cp' }) 
  }, [])
  if (fundState.kind === 'LoadedFundState') {
    return (
      <div className="p-4 max-w-7xl mx-auto pt-8">
        <div
          className="divide-y divide-gray-500 py-4"
        >
          <div className="py-4">
            <h1 className="text-2xl font-bold">
              { fundState.fund.name }
            </h1>
            <p className="text-sm text-gray-400">
              { fundState.fund.legalName }
            </p>
          </div>
          <div className="py-4">
            <h5 className="font-bold text-xs">
              CNPJ
            </h5>
            <p>
              { fundState.fund.formattedDocument }
            </p>
          </div>
          <div className="py-4">
            <h3 className="font-bold text-lg">
              Características
            </h3>
            <div className="py-4 grid grid-cols-4 divide-x divide-gray-500">
              <div>
                <h5 className="font-bold text-xs">
                  CNPJ
                </h5>
                <p>
                  { fundState.fund.formattedDocument }
                </p>
              </div>
              <div className="px-4">
                <h5 className="font-bold text-xs">
                  STATUS
                </h5>
                <p>
                  { fundState.fund.status }
                </p>
              </div>
            </div>
          </div>
        </div>
        { JSON.stringify(fundState) }
      </div>
    )
  } else {
    return (<div>"Loading..."</div>)
  }
}

export default App
