import React, { Fragment, useEffect, useState } from 'react';
import './Navbar.css';

const list = [
    {name:"pika",img: "https://www.serebii.net/pokemonunite/pokemon/025.png"},
    {name:"chard",img:"https://mario.wiki.gallery/images/thumb/2/21/Charizard_SSBU.png/1200px-Charizard_SSBU.png"},
    {name:"bulba",img: "https://shop7.webmodule.prestashop.net/pokedoge/11264-large_default/bulbasaur.jpg"},
    {name:"pika",img: "https://www.serebii.net/pokemonunite/pokemon/025.png"},
    {name:"chard",img:"https://mario.wiki.gallery/images/thumb/2/21/Charizard_SSBU.png/1200px-Charizard_SSBU.png"},
    {name:"bulba",img: "https://shop7.webmodule.prestashop.net/pokedoge/11264-large_default/bulbasaur.jpg"},
    {name:"pika",img: "https://www.serebii.net/pokemonunite/pokemon/025.png"},
    {name:"chard",img:"https://mario.wiki.gallery/images/thumb/2/21/Charizard_SSBU.png/1200px-Charizard_SSBU.png"},
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
    const [load1, setLoad1] = useState(false);
    const [load2, setLoad2] = useState(false);
    const [load3, setLoad3] = useState(false);
    const [load4, setLoad4] = useState(false);

    useEffect(()=>{
        setTimeout(()=> setLoad1(true), 1000);
        setTimeout(()=> setLoad2(true), 2000);
        setTimeout(()=> setLoad3(true), 3000);
        setTimeout(()=> setLoad4(true), 4000);
        setInterval(()=>{

            return (setLoad1(false), setLoad2(false),setLoad3(false),setLoad4(false)) },10000);
        setInterval(()=>{
        setTimeout(()=> setLoad1(true), 1000);
        setTimeout(()=> setLoad2(true), 2000);
        setTimeout(()=> setLoad3(true), 3000);
        setTimeout(()=> setLoad4(true), 4000);
        }, 10000
    );

    },[]);
    
    


    return (
        <>
        <div id='back'>
        <div id='bar'>
             <div className='picHouse'><NavPics/></div>
            {load1 ? <div className='menuButton'>Projects</div> : ""}
            {load2 ? <div className='menuButton'>Tech Languages</div>:""}
            {load3 ? <div className='menuButton'>Contact me</div>:""}
            {load4 ? <div className='menuButton'>Tech Goals</div>:""}
            <div></div>

        
        </div>
        </div>
        </>
    );
}