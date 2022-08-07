import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Cart, Login, Slider, Signup,  Home, Product, DropdownHeader, Navbar, Modal, Tabs } from './components'

function App() {

  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && <Navbar /> }
      {/* {location.pathname !== '/product' && <Navbar />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/dropdown" element={<DropdownHeader />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/tabs" element={<Tabs />} />
      </Routes>
    </>
  )
}

export default App