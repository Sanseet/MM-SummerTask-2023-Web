import React from "react";
import './Footer.css'
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer links">
                   <div className="sb_footer-links-div">
                    <h4>More...</h4>
                    <a href="/articles">
                        <p>Articles</p>
                    </a>
                    <a href="/about-us">
                        <p>About Us</p>
                    </a>
                    <a href="/contact-us">
                        <p>Contact Us</p>
                    </a>
                    </div> 
                    </div>
                   <div className="sb_footer-links-div">
                    <h4>More...</h4>
                    <a href="/articles">
                        <p>Articles</p>
                    </a>
                    <a href="/about-us">
                        <p>About Us</p>
                    </a>
                    <a href="/contact-us">
                        <p>Contact Us</p>
                    </a>
                    </div> 
                    <div className="sb_footer-links-div">
                        <h4>Social Media</h4>
                        <div className="socialmedia">
                            <p><img src={Facebook} alt="" /></p>
                            <p><img src={LinkedIn} alt="" /></p>
                            <p><img src={Instagram} alt="" /></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer;