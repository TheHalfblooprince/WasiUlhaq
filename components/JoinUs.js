import React from "react";
import "./JoinUs.css";
import { useEffect } from "react";
import Aos from "aos";
export default function JoinUs()
{
    useEffect(()=> {
        Aos.init({duration:500})
    },[])
    return(
        <div className="JoinUs" data-aos="fade-up">
            <h1 className="JoinUs--Text">DO NOT HESITATE, SIGN UP NOW AND LET US BE YOUR LOGISTICS PARTNERS</h1>
            <button className="Regbutton">Register Your account</button>
        </div>
    )
}