import React from "react";
import "./Box.css";
export default function Box(props)
{
    return(
        
        <div className="box">
         <img className="box_image" src={props.img} alt="methods"></img>
        <h4 className="desc">{props.desc}</h4>
        </div>
      
    )
}