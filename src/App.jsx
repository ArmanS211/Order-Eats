import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Image from './components/Image'
import FoodCards from './components/FoodCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Navbar/>
    <Image/>
    <FoodCards/>
    </>
  )
}

export default App;
