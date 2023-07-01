import React from "react";
import "./Newsletter.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
// import { IconButton } from "@mui/material"; not working correctly 
export default function NewsLetterr()
{
    return(
        <div className="NewsLetter">
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