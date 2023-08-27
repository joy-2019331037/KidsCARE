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
import Blogs from './pages/Blogs';
import Caregivers from './pages/Caregivers';
import AdminAdmit from './pages/AdminAdmit';
import Req from './pages/Req'
import Services from './pages/Services';
import Details from './pages/Details';
import Add from './pages/AdminAdd';
import Admitted from './pages/Admitted'

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
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/details/:id",
        element:<Details/>
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
        path:"/admitted",
        element:<Admitted/>
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
      {
        path:"/addCaregivers",
        element:<Add/>
      },
      
      
    ]
  },
 
  





]);

function App() {
  return (
   <div>
      
        <div >
        <RouterProvider router={router}/>
        </div>
      
      
     
   </div>
  );
}

export default App;
