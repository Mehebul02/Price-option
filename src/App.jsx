import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Daisyui from './Component/Daisy'
import Navber from './Component/Navber/Navber'
import PriceOptions from './Component/PriceOptions/PriceOptions'
import LineChart from './LineChart/LineChart'
import Phones from './Phones/Phones'

function App() {


  return (
    <>
      
      {/* <h1 className='text-center'>Price Opation</h1> */}
    <Navber></Navber>
    {/* <Daisyui></Daisyui> */}
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>
    <Phones></Phones>
      
    </>
  )
}

export default App
