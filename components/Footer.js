import React from "react";
import "./Footer.css"
import Aos from "aos";
import { useEffect } from "react";
export default function Footer(props)
{
    useEffect(()=> {
        Aos.init({duration:500})
    },[])

    return(
        <div className="Footer" data-aos="zoom-in" >
            <div className="Footer_items">
            <h2 className="footer_heading">{props.heading}</h2>
            <p className="footer_text">
                <ul className="list">
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                    <li>{props.item4}</li>
                    <li>{props.item5}</li>
                    <li>{props.item6}</li>
                </ul>
            </p>
            </div>
        </div>
    )
}