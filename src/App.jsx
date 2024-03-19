import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Daisyui from './Component/Daisy'
import Navber from './Component/Navber/Navber'
import PriceOptions from './Component/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      
      {/* <h1 className='text-center'>Price Opation</h1> */}
    <Navber></Navber>
    {/* <Daisyui></Daisyui> */}
    <PriceOptions></PriceOptions>
      
    </>
  )
}

export default App
