import React from "react";
import './Register.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Register()
{
    useEffect(()=> {
        Aos.init({duration:500})
    },[])
    return(
    <div className="register" data-aos="fade-up">
        <h1 className="heading--Style">Mkhdoom is an Arabic word meaning “ Served “ <br />referring to you as being fully & well served by us.</h1>
        <h3 className="paragraph--style">We are on a mission to make logistics accessible through our<br />technologies and strong global & domestic network.</h3>
        <div className="Register--box" data-aos="fade-left">
            <h3 className="text--styles">Want to optimize your<br /> logistics business and bring<br /> more sales.
                <br /> Do you own a logistics business?</h3>
            <p className="para--text">Sign up as a supplier and open an extra sale channel</p>
            <a href="https://app.mkhdoom.sa/supplier-register">
            <button  className="RegButton">Register your Account</button>
            </a>
        </div>

    </div>
    )
   
}