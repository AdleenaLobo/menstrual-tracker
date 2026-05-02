//check
'use client';
//decide
import { useState } from "react";
import Navbar from "./navbar";
import NavIcon from "./navbarIcon";

export default function NavbarOrIcon(){
   const [clicked , setClicked] = useState(false);
   console.log("hello");
    return(<>
        {clicked?<Navbar clicked={clicked} setClicked = {setClicked}/>:<></> }
        <button className="z-20" onClick= {()=>{setClicked(!clicked)}}><NavIcon/></button>
    </>);
}