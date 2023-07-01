import React from "react";
import "./WhyMakhdoom.css";
export default function WhyMakhdoom()
{
    return(
        <div className="makhdoom">
            <h2 className="dec">Why Work With us</h2>
            <div className="--box">
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