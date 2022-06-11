import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/cart">Cart</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/dropdown">Dropdown Header</Link></li>
      <li><Link to="/modal">Modal Popup</Link></li>
      <li><Link to="/tabs">Tabs</Link></li>
    </Ul>
  )
}

export default Navbar

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  font-size: 20px;
  min-height: 10vh;
  text-transform: uppercase;
  li{
    margin: 0 20px;
    a{
      color: #23b0df;
      :hover{
        border-bottom: .001rem solid #005f96;
        color: #0390be;
      }
    }
  }
`