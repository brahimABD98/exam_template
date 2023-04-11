import { createContext } from "react"
import { useState } from "react"
import { useContext } from "react"
const AppContext = createContext()
const AppUdateContext = createContext()

export function useAppContext() {
  return useContext(AppContext)
}
export function useAppUpdateContext() {
  return useContext(AppUdateContext)
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(true)
  function toggleTheme() {
    setTheme(prev => !prev)
  }
  return (
    <>
      <AppContext.Provider value={theme}>
        <AppUdateContext.Provider value={toggleTheme}>
          {children}
        </AppUdateContext.Provider>
      </AppContext.Provider>
    </>

  )
}