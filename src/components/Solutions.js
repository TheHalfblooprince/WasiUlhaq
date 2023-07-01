import React from "react";
import "./Solutions.css";
import SolutionsChildComponent from "./SolutionsChildComponent";
export default function Solutions()
{
    return(
        <div className="Solutions">
            <h1 className="Heading_style">Solutions</h1>
            <p className="Paragraph_Style">Mkhdoom platform, is the e-logistics platform where you can access different <br /> logistics in one stop solution, whether you’re an ecommerce business, importer <br />  exporter , global trader, a regular business, Mkhdoom platform is your logistics <br /> partner.</p>
           <SolutionsChildComponent image={"../freight.png"} desc={"Makhdoom Freight"}/>
           <SolutionsChildComponent image={"../Storage.png"} desc={"Makhdoom Storage"}/>
           <SolutionsChildComponent image={"../express.png"} desc={"Makhdoom Express"}/>
        </div>
    )
}
