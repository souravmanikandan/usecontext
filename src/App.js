import React from 'react'
import FunctionContextComponents from './FunctionContextComponents'
import { ThemeProvider } from './ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponents/>
    </ThemeProvider>
  )
}

export default App