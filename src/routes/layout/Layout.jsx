import React from 'react'
import './Layout.css'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div classname="layout">
        <div classname="navbar">
            <Navbar/>
        </div>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout