import React from "react";
import "./Solutions.css";
import SolutionsChildComponent from "./SolutionsChildComponent";
import { useEffect } from "react";
import Aos from "aos";

export default function Solutions()
{
    useEffect(()=> {
        Aos.init({duration:500})
    },[])

    return(
        <div className="Solutions" data-aos="fade-up">
            <h1 className="Heading_style">Solutions</h1>
            <p className="Paragraph_Style">Mkhdoom platform, is the e-logistics platform where you can access different <br /> logistics in one stop solution, whether you’re an ecommerce business, importer <br />  exporter , global trader, a regular business, Mkhdoom platform is your logistics <br /> partner.</p>
           <SolutionsChildComponent image={"../freight.png"} desc={"Makhdoom Freight"}/>
           <SolutionsChildComponent image={"../Storage.png"} desc={"Makhdoom Storage"}/>
           <SolutionsChildComponent image={"../express.png"} desc={"Makhdoom Express"}/>
        </div>
    )
}
