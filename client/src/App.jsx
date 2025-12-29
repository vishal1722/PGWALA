import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-100 w-full h-full box-border'>
      <Home />
    </div>
  )
}

export default App
