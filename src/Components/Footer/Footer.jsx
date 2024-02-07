import React from 'react'

export default function Footer() {
   return (
      <footer className='text-center text-white'>
         <div className="container py-5">
            <div className="row">
               <div className="col-md-4 py-4">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
               </div>
               <div className="col-md-4 py-4">
                  <h3>AROUND THE WEB</h3>
                  <div className='d-flex justify-content-center'>
                     <div className='icon'>
                        <i className="fa-brands fa-facebook-f"></i>
                     </div>
                     <div className='icon'>
                        <i className="fa-brands fa-twitter"></i>
                     </div>
                     <div className='icon'>
                        <i className="fa-brands fa-linkedin-in"></i>
                     </div>
                     <div className='icon'>
                        <i className="fa-solid fa-globe"></i>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 py-4">
                  <h3>ABOUT FREELANCER</h3>
                  <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
               </div>
            </div>
         </div>
         <div className='copyright'>
            <p className='py-4 m-0'>Copyright © Khalid Mohammed Fathi 2024</p>
         </div>
      </footer>
   )
}
