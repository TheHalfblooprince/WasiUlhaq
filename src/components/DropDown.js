import React from "react";
import "./DropDown.css"
export default function DropDown(props)
{
   
    return(
        <div className="itemBox">
        <ul className="Items">
        {props.img_1 &&  <li><img src={props.img_1} alt="E_comm"></img>{props.Desc_1}</li> }
        {props.img_2 &&  <li><img src={props.img_2} alt="E_comm"></img>{props.Desc_2}</li> }
        {props.img_3 &&  <li><img src={props.img_3} alt="E_comm"></img>{props.Desc_3}</li> }
        {props.img_4 &&  <li><img src={props.img_4} alt="E_comm"></img>{props.Desc_4}</li> }
        </ul>
        </div>
    )
}