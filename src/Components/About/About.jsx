import React from 'react'

export default function About() {
   return (
      <>
         <section id='about' className='vh-100 d-flex align-items-center justify-content-center'>
            <div className='text-center container'>
               <h2 className='fs-1 fw-bold m-0'>ABOUT COMPONENT</h2>
               <div className='star position-relative'>
                  <i className="fa-solid fa-star my-3"></i>
               </div>
               <div className='row text-start px-5'>
                  <div className="col-md-6 ps-md-5">
                     <p>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                     </p>
                  </div>
                  <div className="col-md-6 pe-5">
                     <p>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>

   )
}
