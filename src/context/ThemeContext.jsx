import react, { useState } from 'react'


export const ThemeContext = react.createContext()
export const ThemeUpdateContext = react.createContext()


const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeContext.Provider value={darkMode}>
            <ThemeUpdateContext.Provider value={ ()=>setDarkMode(!darkMode) }>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider