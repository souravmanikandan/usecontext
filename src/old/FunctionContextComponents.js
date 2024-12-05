import React, { useContext } from 'react'
import { ThemeContext } from './App'

const FunctionContextComponents = () => {
    const darkTheme = useContext(ThemeContext)
    const styles = {
        backgroundColor: darkTheme ? '#000' : '#fff',
        color: darkTheme ? '#fff' : '#000',
        margin: '2rem',
        padding: '2rem'
    }
  return (
    <div style={styles}>Function</div>
  )
}

export default FunctionContextComponents