import React from "react";
import "./Usecases.css"
export default function UseCases()
{
    return(
        <div className="Usecases">
            
        <h2 className="Heading">Use cases</h2>
            <div className="Body">
        <img src="../package.png" alt="package" className="ImgPackage"></img>
        <h3 className="--ImgHeading">E-commerce</h3>
        <p className="E-commerceInfo">
           In Fast growing sector like Ecommerce, logistics can be the bottleneck <br />to harden your business growth, as the ecommerce counts mainly on <br />strong logistics behind it and as your business grows your logistics< br /> needs become more complicated. <br /> <span className="span">We are well experienced in the ecommerce logistics, and we have alot of clientel</span>
         </p>
         <a href="https://app.mkhdoom.sa/mkhdoom-plateform" className="Link">Read more</a>


            </div>

            <div className="ImportsExports">
                <img src="imports_exports.png" alt="exports" className="exports--image"></img>
                <h1 className="exports--tag">Import & Export</h1>
                <p className="exports--desc">In Fast growing sector like Ecommerce, 
                logistics can be the bottleneck to harden your business growth, 
                as the ecommerce counts mainly on strong logistics behind it and as your 
                business grows your logistics needs become more complicated.
                </p>
                <a href="https://app.mkhdoom.sa/mkhdoom-plateform" className="exports--Link">Read more</a>

            </div>

            <div className="IntlTrade">
                <img src="./intlTrade.png" alt="trade" className="trade--image"></img>
                <h1 className="trades--tag">International trade</h1>
                <p className="trade--desc">
                In modern trade, markets became closer to each other, you are a trader who works in suppling different 
                commodities from anywhere to anywhere
                </p>
                <a href="https://app.mkhdoom.sa/mkhdoom-plateform" className="exports--Link">Read more</a>

            </div>

            <div className="SupplyChainControl">
                <img className="supply--image" src="../supply_chaincontrol.png" alt=""></img>
                <h3 className="supply--heading">Supply Chain Control</h3>
                <p className="supply-text">Using Mkhdoom Platform will give you the overall control of your supply chain</p>
                <a href="https://app.mkhdoom.sa/mkhdoom-plateform" className="supply--Link">Read more</a>
            </div>
        </div>
    )
}