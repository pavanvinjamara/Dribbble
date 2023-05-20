import React from 'react'
import Home from '../../components/Home/index';
import Footer from '../../components/Footer/index'
import Navbar from '../../components/navbar';
import SideComponent from '../../components/sideComponent';
import './index.css'

function MainHome() {
  return (
    <div className='main-container'>
        <Navbar/>
        <div className='flex-main'>
            <Home/>
            <SideComponent className/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainHome