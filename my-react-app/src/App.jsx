import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import SearchBar from './components/SeachBar'
import Products from './features/products/Products'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Cart from './features/cart/Cart'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <SearchBar/>
    <Products/>
  <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </BrowserRouter>
    
    {/* <div className='p-3 m-4 gap-6'>
       <ColorButtons/>
    </div>
    
    <div className='p-5 m-7'> <MenuAppBar/></div>
    <div className='p-3 m-3'>
      <div><MediaCard/></div> 
    </div> */}
    </>
  )
}

export default App
