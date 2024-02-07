import React from 'react'

export default function Portfolio_Item(props) {
   return (
      <>
         <div className="col-lg-4 col-md-6">
            <div className='img_parent' onClick={()=>props.open(props.url)}>
               <img src={props.url} className='w-100' alt="" />
               <div className="img_overlay">
                  <i className="fa-solid fa-plus fa-6x"></i>
               </div> 
            </div>
         </div>
      </>
   )
}
