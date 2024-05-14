import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function Navbarlayout() {
  return (
<>
  <Navbar></Navbar>
    <Outlet></Outlet>
</>
  )
}

export default Navbarlayout