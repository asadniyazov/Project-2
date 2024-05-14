import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"
import { Maincontext } from '../Context/Mainprovider'
function Navbar() {
    const {Basket} = useContext(Maincontext)
  return (
  <>
    <div className='Navbar'>
        <ul className='Navbar_ul'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'basket'}>Basket{Basket.length}</Link></li>
            <li><Link to={'wishlist'}>Wishlist</Link></li>
            <li><Link to={'adminpanel'}>Adminpanel</Link></li>
            <li><Link to={'add'}>Add</Link></li>
        </ul>
    </div>
  </>
  )
}

export default Navbar