import React from "react";
import "./SolutionsChildComponent.css";
export default function SolutionsChildComponent(props)
{
    return(
        <div className="SolutionChild_Cards">
        <img className="propsImage" src={props.image} alt="propsImage"></img>
        <h4 className="propsdesc">{props.desc}</h4>
        <a className="Infotag" href="https://app.mkhdoom.sa/mkhdoom-freight">Learn more</a>
         </div>
    )

}