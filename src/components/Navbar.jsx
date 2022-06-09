import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Container>
        <ul>
            <li><Link to="/"><a href='#'>Home</a></Link></li>
            <li><Link to="/cart"><a href='#'>Cart</a></Link></li>
            <li><Link to="/products"><a href='#'>Products</a></Link></li>
            <li><Link to="/login"><a href='#'>Login</a></Link></li>
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
    background-color: #97dbf149;
    font-size: 25px;
    height: 10vh;
    text-transform: uppercase;
    li{
      margin: 0 20px;
      color: red;
      :hover{
        color: #014f69;
        border-bottom: .1rem solid #039fd3;
      }
    }
  }
`