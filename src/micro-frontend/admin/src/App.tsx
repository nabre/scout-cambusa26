import React from 'react'
import apiClient from '../../../shared/client/apiEndpoint'


const readInfo = async () => {
  const response = await apiClient.get('info')
  console.log(response.data)
}

const App: React.FC = () => {

  readInfo()


  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Aggiungi qui il contenuto del dashboard admin */}
    </div>
  )
}

export default App