import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about';

import Home from './home';


 export default function Layout() {   

 return (
 <>
 <BrowserRouter>
 
 <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>


 </Routes>

 </BrowserRouter>


</>
);

 }