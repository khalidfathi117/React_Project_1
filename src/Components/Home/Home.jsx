import React from 'react'
import hero from '../../Assets/Images/Hero.svg'
export default function Home() {
   return (
      <header className='text-center text-white vh-100 d-flex justify-content-center align-items-center flex-column'>
            <div>
               <img src={hero} alt="" className='w-75 p-4' />
               <h2 className='fw-bold m-0 fs-1'>START FRAMEWORK</h2>
               <div className='star position-relative'>
                  <i className="fa-solid fa-star my-3"></i>
               </div>
               <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
      </header>
   )
}
