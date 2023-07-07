import React, { useEffect } from "react";
import "./WhyMakhdoom.css";
import Aos from "aos";
import "aos/dist/aos.css"
export default function WhyMakhdoom()
{
    useEffect(()=> {
        Aos.init({duration:1000})
    },[])
    return(
        <div className="makhdoom" data-aos="fade-up">
            <h2 className="dec">Why Work With us</h2>
            <div className="--box" data-aos="flip-left">
            <h5 className="ul--list">
                    <ul className="unorderedList">
                    <li><span className="bold">YOU</span> get best prices.</li>    
                    <li><span className="bold">HAVE</span> live tracking.</li>   
                    <li><span className="bold">ALL</span> logistics needs in one platform.</li>   
                    <li><span className="bold">THE</span> ERPs & E-commerce platform integrate easily</li>   
                    <li><span className="bold">TRANSPERANCY</span> in billing</li>   
                    </ul>  
                    {/* CAN ALSO BE DONE BY USING PROPS           */}
            </h5>
        </div>
        </div>
    )
}