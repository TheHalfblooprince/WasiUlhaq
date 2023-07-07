import React from "react";
import "./Newsletter.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
// import { IconButton } from "@mui/material"; not working correctly 
import Aos from "aos";
import { useEffect } from "react";
export default function NewsLetterr()
{
    useEffect(()=> {
        Aos.init({duration:500})
    },[])

    return(
        <div className="NewsLetter" data-aos="zoom-in">
            <h2 className="News--Heading">News Letter</h2>
                <input type="text" placeholder="Email address" className="inputFeild"></input>
                <a href="https://app.mkhdoom.sa/?#!" className="News--Button">Submit</a>
                
                <FacebookIcon className="FacebookIcon"/> 
                <InstagramIcon className="InstagramIcom" />
                 <TwitterIcon className="TwitterIcon" />
                 <PinterestIcon className="PinterestIcon" />
                

            </div>
    )
}