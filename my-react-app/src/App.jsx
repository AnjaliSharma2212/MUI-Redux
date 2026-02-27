import { useState } from 'react'
import './App.css'
import ColorButtons from './components/Button'
import MenuAppBar from './components/MenuBar'
import MediaCard from './components/MediaCard'


function App() {
  

  return (
    <>
    <div className='p-3 m-4 gap-6'>
       <ColorButtons/>
    </div>
    
    <div className='p-5 m-7'> <MenuAppBar/></div>
    <div className='p-3 m-3'>
      <div><MediaCard/></div> 
    </div>
    </>
  )
}

export default App
