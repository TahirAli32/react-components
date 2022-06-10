import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Cart, Login, Home, Products, DropdownHeader, Navbar } from './components'

function App() {

  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dropdown" element={<DropdownHeader />} />
      </Routes>
    </>
  )
}

export default App