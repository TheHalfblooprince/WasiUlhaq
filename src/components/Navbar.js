import React from "react";
import './Navbar.css';
import DropDown from "./DropDown"
export default function Navbar()
{

    const[IsdropDown,setIsdropDown] = React.useState(null);

    // const handleMuseEnter = setIsdropDown(true)
    // const handleMouseLeave = setIsdropDown(false)

    const handleMouseEnter = (DropdownId) => {
        setIsdropDown(DropdownId)
    }

    const handleMouseLeave = () => {
       setIsdropDown(null)
    }


    return(
        <div className="Nav">
        <img src="../Makhdoom.png" alt="Makhdoom_image" className="Img_Icon" />
        
            <div className="home">
        <p>Home</p>
            </div>
        
        <div className="DropDownComponents" onMouseLeave={handleMouseLeave}>

        <div className="usecase" onMouseEnter={() => handleMouseEnter("usecase")}>
        <p>UseCases
        {IsdropDown==="usecase" && <DropDown img_1={"../Shopping_bag.png"} img_2={"../Airplane.png"} 
        img_3={"../Earth.png"} img_4={"../boxes.png"} Desc_1={"E-commerce"} Desc_2={"Import and Export"} Desc_3={"International Trade"} Desc_4={"Supply Chain Control"}
        />}
        </p>
        </div>   {/* Usecase Div End */}
        
        <div className="Products"  onMouseEnter={() => handleMouseEnter("Products")}>
        <p>Products
        {IsdropDown==="Products" && <DropDown img_1={"../dabba.png"} img_2={"../delivery_boy.png"} 
        img_3={"../shipment.png"} img_4={"../Storage.png"} Desc_1={"E-Logistics Platfrom"} Desc_2={"Makhdoom Express"} Desc_3={"Makhdoom Freight"} Desc_4={"Makhdoom Storage"}
        />}
        </p>
        </div>   {/* Product Div End */}

        <div className="Devtools" onMouseEnter={() => handleMouseEnter("Devtools")}>
        <p>Devtools</p>
        {IsdropDown==="Devtools" && <DropDown img_1={"../code.png"} img_2={"../Faq.png"} 
        img_3={"../customer_support.png"} Desc_1={"API Document"} Desc_2={"FAQ"} Desc_3={"Support"}
        />}

         </div> 
        {/* Devtools Div End */}

        <div className="Media" onMouseEnter={ () => handleMouseEnter("Media")}>
            <p>Media</p> 
            {IsdropDown==="Media" && <DropDown img_1={"../News.png"} img_2={"../NewsLetter.png"} 
        img_3={"../blog.png"}  img_4={"../Academy.png"} Desc_1={"News"} Desc_2={"News Letter"} Desc_3={"Blog"}
        Desc_4={"Academy"}
        />}
            </div> 
       
        {/* Media Div End */}

        <div className="Makhdoom" onMouseEnter={ () => handleMouseEnter("Makhdoom")}>
            <p>Makhdoom</p> 
            {IsdropDown==="Makhdoom" && <DropDown img_1={"../Company.png"} img_2={"../MainOffice.png"} 
        img_3={"../ContactUs.png"}  Desc_1={"Company"} Desc_2={"Main Office"} Desc_3={"Contact Us"}
        Desc_4={"Academy"}
        />}
            </div> 

           {/* End of Makhdoom div */}

           <div className="Advisory" onMouseEnter={ () => handleMouseEnter("Advisory")}>
            <p>Advisory</p> 
            {IsdropDown==="Advisory" && <DropDown img_1={"../Market_intelligence.png"} img_2={"../Research.png"} 
        img_3={"../Trade.png"}  img_4={"../Suppy_chain.png"} Desc_1={"Market Intelligence"} Desc_2={"Research"} Desc_3={"Trade Advisory"}
        Desc_4={"Supply Chain"}
        />}
            </div> 
        

        </div>   {/* DropDown Div End */}
        
         
        </div> 

        // Nav Div End
    )

}