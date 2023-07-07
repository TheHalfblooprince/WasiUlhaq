import React from "react";
import "./Card.css"
import Box from "./Box";
import { useEffect } from "react";
import Aos from "aos";
export default function Card()
{
    useEffect(()=> {
        Aos.init({duration:500})
    },[])
    return(
        <div className="container" data-aos="fade-up">
            
            <div className="HeadingStyles">
            <h1 className="HeadingStyles">Challenges </h1>
            <p className="ptag">These are common challenges you might be facing, that's why we are here as Mkhdoom</p>
            </div>
            <div className="box_container" data-aos="flip-left">
            <Box desc={"Different Logistics Needs"} img={"../truck.png"}/>
            <Box desc={"Different Challenges"} img={"../challanges.png"} />
            <Box desc={"Unpredictable supply chain changes"} img={"../supply_chain.png"}/>
            </div>
            {/* <Box desc={"Body"} />
              */}
            
        </div>
    )
}