import React, { Fragment, useEffect, useState } from 'react';
import './Navbar.css';

const list = [
    {name:"pika",img: "https://www.serebii.net/pokemonunite/pokemon/025.png"},
    {name:"chard",img:"https://static.wikia.nocookie.net/pokemon/images/7/7a/Ash_Charizard.png"},
    {name:"bulba",img: "https://shop7.webmodule.prestashop.net/pokedoge/11264-large_default/bulbasaur.jpg"},
    {name:"pika",img: "https://www.serebii.net/pokemonunite/pokemon/025.png"},
    {name:"chard",img:"https://static.wikia.nocookie.net/pokemon/images/7/7a/Ash_Charizard.png"},
    {name:"bulba",img: "https://shop7.webmodule.prestashop.net/pokedoge/11264-large_default/bulbasaur.jpg"},
    {name:"pika",img: "https://www.serebii.net/pokemonunite/pokemon/025.png"},
    {name:"chard",img:"https://static.wikia.nocookie.net/pokemon/images/7/7a/Ash_Charizard.png"},
    {name:"bulba",img: "https://shop7.webmodule.prestashop.net/pokedoge/11264-large_default/bulbasaur.jpg"}
];

function NavPics() {
    const [pic, setPic] = useState(null);

    const run = (itemX, i) => {
        setTimeout(()=> {setPic(itemX);}, i * 5000);


    };
    useEffect(()=>{
        list.forEach((item, i) => run(item.img, i));
        


    },[]);
    
 


    const finalPic = <img className='iSize' src={pic} />;


    return (
    <>
    <div>{finalPic}</div>
    </>

    );
}


export default function Navbar(){
    
    


    return (
        <>
        <div id='bar'>
            <div className='picHouse'><NavPics/></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        
        </div>
        </>
    );
}