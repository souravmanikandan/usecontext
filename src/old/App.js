import React, { useState } from 'react'
import FunctionContextComponents from './FunctionContextComponents'
import ClassContextComponents from './ClassContextComponents'

export const ThemeContext = React.createContext()

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    function toggleTheme() {
        setDarkTheme(prev => !prev)
    }
  return (
    <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponents />
        <ClassContextComponents />
    </ThemeContext.Provider>
  )
}

export default App