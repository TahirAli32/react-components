/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Container>
        <ul>
            <a><li><Link to="/">Home</Link></li></a>
            <a><li><Link to="/cart">Cart</Link></li></a>
            <a><li><Link to="/products">Products</Link></li></a>
            <a><li><Link to="/login">Login</Link></li></a>
            <a><li><Link to="/dropdown">Dropdown Header</Link></li></a>
        </ul>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    font-size: 25px;
    height: 10vh;
    text-transform: uppercase;
    a{
      color: #23b0df;
      :hover{
        color: #0390be;
      }
    }
    li{
      margin: 0 20px;
      :hover{
        border-bottom: .001rem solid #005f96;
      }
    }
  }
`