// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const router=createBrowserRouter(
  [
    {
      path: '/',
      element:<div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/about',
      element:<div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path: '/services',
      element:<div>
        <Navbar/>
        <Services/>
      </div>
    },
    {
      path: '/contact',
      element:<div>
        <Navbar/>
        <Contact/>
      </div>
    }
  ]
)
function App() {
  return (
    <> <div> <RouterProvider router={router} /></div>
    <Footer/>
      
    </>
  )
}

export default App

