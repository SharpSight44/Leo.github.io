import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";


export default function Home(){


    const navigate = useNavigate();
   
    function AboutMe(){

        return(
            <div className="About">
                <div className="cardsHouse">
            <div className="myCards">
                 <div style={{height:"50%"}} ><img style={{width:"100%", borderRadius:"10px 10px 0px 0px"}}src="https://www.gcu.edu/sites/default/files/2020-09/programming.jpg" /></div>
                 <div > Text Information Goes there for me if i want to do text</div>
                 
                 </div>
                 <div className="myCards">
                 <div style={{height:"50%"}} ><img style={{width:"100%", borderRadius:"10px 10px 0px 0px"}}src="https://www.gcu.edu/sites/default/files/2020-09/programming.jpg" /></div>
                 <div > Text Information Goes there for me if i want to do text</div>
                 
                 </div>
                 </div>

                 <div className="cardsHouse">
                 <div className="myCards">
                 <div style={{height:"50%"}} ><img style={{width:"100%", borderRadius:"10px 10px 0px 0px"}}src="https://www.gcu.edu/sites/default/files/2020-09/programming.jpg" /></div>
                 <div > Text Information Goes there for me if i want to do text</div>
                 
                 </div>
                 <div className="myCards">
                 <div style={{height:"50%"}} ><img style={{width:"100%", borderRadius:"10px 10px 0px 0px"}}src="https://www.gcu.edu/sites/default/files/2020-09/programming.jpg" /></div>
                 <div > Text Information Goes there for me if i want to do text</div>
                 
                </div>
                 </div>
            


            </div>

        );

    }

    return (
        <>  
        <div className="top">
            <Navbar/>
        <h1 style={{marginTop:"0px"}}>Hello Main Page </h1>
       <div onClick={()=> navigate('/about')}> Click Me For About Page </div>
       <AboutMe/>
      <Footer/>
       </div>
       
        </>
    );
}