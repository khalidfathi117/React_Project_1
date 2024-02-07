import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

export default function App() {
   let routes = createBrowserRouter([
      {
         path: '/', element: <MainLayout />, children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'portfolio', element: <Portfolio/> },
            { path: 'contact', element: <Contact/>}
         ]
      }
   ])
   return (
      <>
         <RouterProvider router={routes} />
      </>
   )
}
