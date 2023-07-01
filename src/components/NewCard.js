import React from "react";
import "./NewCard.css";
export default function NewCard()
{
    return(
        <div className="NewCard">
        <h1 className="HeadingStyle">Makhdoom e-logistics platfrom brings all your logistic needs in one place</h1>
        <p className="ParagraphStyle">Express deliveries,Freight,Storage & warehousing in fully digitalized experience</p>
        <a href="https://app.mkhdoom.sa/register">
        <span className="SpanText"> TRY IT NOW
        <img className="arrowimg " src="../arrow.png" alt="arrow" />
        </span>
        </a>

        <a href="https://app.mkhdoom.sa/register" className="Reg_link">Request a demo</a>
        <div className="ImageComponent">
            <img src="../maps.png" alt="maps" className="MapImage"/>
        </div>
        </div>
    )
}