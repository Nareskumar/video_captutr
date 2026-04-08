import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Courses from './components/Courses';
import MockTest from './components/MockTest';
import Reports from './components/Reports';
import Pagenhi from './components/Pagenhi';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParamComp from './components/ParamComp';
const router = createBrowserRouter(
  [
     {
        path: "/",
        element: <div>
           <NavBar/>
           <Home/>

        </div>
        

     },
     {
         path: "/about",
         element: <div>
                       <NavBar/>
                        <About/>

                  </div>

     },
     {
      path: "/dashboard",
      element: <div>
                   <NavBar/>
                   <Dashboard/>

               </div>,
               children:[
                 {
                  path:'courses',
                  element: <Courses/>
                 },
                 
                 {
                  path:'mock',
                  element: <MockTest/>
                 },
                 
                 
                 {
                  path:'report',
                  element:<Reports/>

                 },

                 

               ]

     },
     {
      path : '*',
      element: <Pagenhi/>

    },

     {

        path: "/student/:id",
        element :
         <div>
            <NavBar/>
            <ParamComp/>

         </div>

     }


    



  ]



);



function App() {
  
  return (
    
        <div>
            <RouterProvider  router = {router} /> 
            
             
        </div>
  )
}

export default App
