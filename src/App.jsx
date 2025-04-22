import React from 'react'
import { UserProvider } from './loginstatus/context/Context'
import Router from './loginstatus/router/Router'


const App = () => {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  )
}

export default App