import React from 'react'
import { ThemeProvider } from './component/context/Context'
import Header from './component/header/Header'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App