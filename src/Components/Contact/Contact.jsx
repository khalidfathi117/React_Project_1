import { useFormik } from 'formik'
import React from 'react'

export default function Contact() {

   let submit = useFormik({
      initialValues: {
         Name: '',
         Age: '',
         Email: '',
         Password: ''
      },
      onSubmit: (values) => {
         console.log(values);
      }
   })



   return (
      <>
         <section id='contact' className='Offset text-center min-vh-100'>
            <div className="container">
               <h2 className='fs-1 fw-bold mt-5 mb-0'>CONTACT SECTION</h2>
               <div className='star position-relative'>
                  <i className="fa-solid fa-star my-3"></i>
               </div>
               <form className='w-50 mx-auto text-start' onSubmit={submit.handleSubmit}>
                  <div className='form-floating'>
                     <input type="text" onChange={submit.handleChange} className='form-control border-0 border-bottom my-4' placeholder='UserName' name='Name' id='name' />
                     <label htmlFor="name">UserName</label>
                  </div>
                  <div className="form-floating">
                     <input type="number" onChange={submit.handleChange} className='form-control border-0 border-bottom my-4' placeholder='UserAge' name='Age' id='age' />
                     <label htmlFor="age">UserAge</label>
                  </div>
                  <div className="form-floating">
                     <input type="email" onChange={submit.handleChange} className='form-control border-0 border-bottom my-4' placeholder='UserEmail' name='Email' id='email' />
                     <label htmlFor="email">UserEmail</label>
                  </div>
                  <div className="form-floating">
                     <input type="password" onChange={submit.handleChange} className='form-control border-0 border-bottom my-4' placeholder='UserPassword' name='Password' id='password' />
                     <label htmlFor="password">UserPassword</label>
                  </div>
                  <button type='submit' className='btn my-3 text-white'>Send Message</button>
               </form>
            </div>
         </section>
      </>
   )
}
