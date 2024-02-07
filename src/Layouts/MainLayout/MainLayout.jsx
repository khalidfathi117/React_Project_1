import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Components/Navigation/Navigation'
import Footer from '../../Components/Footer/Footer'

export default function MainLayout() {
   return (
      <>
         <Navigation/>
         <Outlet/>
         <Footer/>
      </>
   )
}
