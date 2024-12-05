import { useState, createContext, useContext } from "react";

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export function useTheme() {
    return useContext(ThemeContext)
}
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}
export function ThemeProvider({children}) {
  const [darkTheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme((prev) => !prev);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
