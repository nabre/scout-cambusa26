import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from '#/contexts/AuthContexts.js'
import { StoreProvider } from '#/store/contexts/storeContext'

import App from './App'
import '#/styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StoreProvider>
  </React.StrictMode>,
)
