import { useState } from 'react'

import './App.css'
import { Button } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import { AppProvider, useAppContext } from './AppContext'
function App() {
  const [count, setCount] = useState(0)
  const theme=useAppContext()
  console.log(theme)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>p</>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>

  )
}

export default App
