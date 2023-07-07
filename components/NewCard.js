import React from "react";
import "./NewCard.css";
import arrow from "./arrow.json";
import Lottie from "lottie-react";
import { useEffect } from "react";
import Aos from "aos";
export default function NewCard()
{
    useEffect(()=> {
        Aos.init({duration:500})
    },[])

    const styles={
        position: "absolute",
        width: "200px",
        height: "200px",
        top:"-80px",
        left:"180px"
    }
    return(
        <div className="NewCard" data-aos="fade-up">
        <h1 className="HeadingStyle">Makhdoom e-logistics platfrom brings all your logistic needs in one place</h1>
        <p className="ParagraphStyle">Express deliveries,Freight,Storage & warehousing in fully digitalized experience</p>
        <a href="https://app.mkhdoom.sa/register">
        <span className="SpanText"> TRY IT NOW
        <div  style={styles}> 
            <Lottie animationData={arrow}/>
        </div>
        </span>
        </a>

        <a href="https://app.mkhdoom.sa/register" className="Reg_link">Request a demo</a>
        <div className="ImageComponent">
            <img src="../maps.png" alt="maps" className="MapImage"/>
        </div>
        </div>
    )
}