import React, { useEffect } from 'react';
import { useState, } from "react";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Index from './pages/Index'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Monitor from "./pages/Monitor";
import Caregivers from './pages/Caregivers';
import AdminAdmit from './pages/AdminAdmit';
import Req from './pages/Req'
import Services from './pages/Services';

import Navbar from './components/Navbar'
import Footer from './components/Footer';

import axios from 'axios';

import './style.scss';

const Layout =()=>{
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}
 

const router = createBrowserRouter([
  {
    path:"/",
    element:<Index/>
  },

  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },


  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/services/:id",
        element:<Services/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/caregivers",
        element:<Caregivers/>
      },
      {
        path:"/write",
        element:<Write/>
      },
      {
        path:"/monitor",
        element:<Monitor/>
      },
      {
        path:"/adminAdmit",
        element:<AdminAdmit/>
      },
      {
        path:"/req",
        element:<Req/>
      },
      
      
    ]
  },
 
  





]);

function App() {
  const [loading, setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000);

  },[])

  return (
   <div>
      
        <div >
        <RouterProvider router={router}/>
        </div>
      
      
     
   </div>
  );
}

export default App;
