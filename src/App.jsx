import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Cart, Login, Home, Products, DropdownHeader, Navbar, Modal, Tabs } from './components'

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
        <Route path="/modal" element={<Modal />} />
        <Route path="/tabs" element={<Tabs />} />
      </Routes>
    </>
  )
}

export default App