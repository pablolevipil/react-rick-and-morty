import React, {useEffect, useState} from 'react'
import CaracteresList from './components/CaracteresList'

function App() {

  return (
    <div className='bg-dark text-white'>

      <h1 className='text-center display-1 py-4'>Rick and morty</h1>
      <CaracteresList /> 
      
    </div>
  )
}

export default App
