import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home(){


    const navigate = useNavigate();
    

    return (
        <>  
        <h1>Hello Main Page </h1>
       <div onClick={()=> navigate('/about')}> Click Me For About Page </div>
        </>
    );
}