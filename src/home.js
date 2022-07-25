import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";


export default function Home(){


    const navigate = useNavigate();
    

    return (
        <>  
        <div className="top">
            <Navbar/>
        <h1 style={{marginTop:"0px"}}>Hello Main Page </h1>
       <div onClick={()=> navigate('/about')}> Click Me For About Page </div>
       </div>
        </>
    );
}