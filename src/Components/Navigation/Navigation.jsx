import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {

   const [nav, setNav] = useState('py-4')
   useEffect(() => {
      function navScroll(){
         if(window.scrollY >= 103){
            setNav('py-2');
         }else{
            setNav('py-4');
         }
      }
      window.addEventListener('scroll', navScroll);
      return () => window.removeEventListener('scroll', navScroll);
   }, []);

   return (
      <>
         <nav className={`navbar navbar-expand-lg ${nav} fixed-top`}>
            <div className="container">
               <Link className="navbar-brand fs-2" to={'/'}>START FRAMEWORK</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                     <li className="nav-item">
                        <NavLink className="nav-link m-2 p-2" to={'about'}>ABOUT</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link m-2 p-2" to={'portfolio'}>PORTFOLIO</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink className="nav-link m-2 p-2" to={'contact'}>CONTACT</NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   )
}
