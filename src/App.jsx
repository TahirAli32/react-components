import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const App = () => {
  return (
    <div>
        <h2>These are React Components</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}

export default App

const Container = styled.div`
  background-color: #aaaaf5;
`