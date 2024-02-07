import React, { useState } from 'react'
import Portfolio_Item from './Portfolio_Item.jsx';
import image1 from '../../Assets/Images/port1.png'
import image2 from '../../Assets/Images/port2.png'
import image3 from '../../Assets/Images/port3.png'

export default function Portfolio() {

   let URLs = [
      image1, image2, image3, image1, image2, image3
   ]

   const [overlay, setOverlay] = useState('d-none');
   const [url, setUrl] = useState();

   function close(e) {
      if (!e.target.src) {
         setOverlay('d-none');
         document.body.style.overflow = 'auto';
      }
   }

   function open(recieve) {
      setUrl(recieve);
      setOverlay('d-flex');
      document.body.style.overflow = 'hidden';
   }

   return (
      <>
         <div className={`port_overlay ${overlay}`} onClick={(e) => close(e)}>
            <img src={url} className="w-50" alt="" />
         </div>
         <section id='portfolio' className='d-flex justify-content-center align-items-center my-4 Offset'>
            <div className="container text-center">
               <h2 className='fs-1 fw-bold m-0'>PORTFOLIO COMPONENT</h2>
               <div className='star position-relative mb-3'>
                  <i className="fa-solid fa-star my-3"></i>
               </div>
               <div className="row g-4 g-md-5">
                  {URLs.map((item, index) => { return <Portfolio_Item open={open} url={item} key={index} /> })}
               </div>
            </div>
         </section>
      </>

   )
}
