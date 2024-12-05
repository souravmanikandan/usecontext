import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext';

const FunctionContextComponents = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const style = {
    backgroundColor: darkTheme ? '#000': '#DCE2C8',
    color: darkTheme ? '#DCE2C8' : '#000',
    margin: '2rem',
    padding: '2rem'
  }
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={style}>Function</div>
    </>
  )
}

export default FunctionContextComponents