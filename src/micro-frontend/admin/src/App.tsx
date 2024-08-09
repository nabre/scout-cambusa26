import { useAuthContext } from '#/contexts/AuthContexts'
import Login from '#/components/organisms/Login'
import React from 'react'



const App: React.FC = () => {
  const props = useAuthContext()


  return (
    <div>
      <h1>Admin Dashboard</h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
      <Login />
    </div>
  )
}

export default App