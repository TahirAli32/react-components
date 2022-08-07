import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App">
          <h2>Components that are Completed</h2>
          <ul className='components'>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/slider">Slider</Link></li>
            <li><Link to="/modal">Modal Popup</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/dropdown">Dropdown Header</Link></li>
            <li><Link to="/tabs">Tabs</Link></li>
          </ul>
      </div>
  )
}

export default Home