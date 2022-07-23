import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about';
import Home from './home';
import Navbar from './navbar';

 export default function Layout() {   

 return (
 <>
 <BrowserRouter>
 
 <Navbar/>
 <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>


 </Routes>
 </BrowserRouter>


</>
);

 }