import React from "react";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <>
 <div  className='footer' id = "footer"> 

<div className='footer-content'>
    <div className="footer-content-left">
        <img src = 'roblox.svg'  style={{height:"70x", width:"70px"}} alt = ""/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, tempora. Aperiam ipsa a voluptatem dolorem temporibus, eum facilis itaque iusto quos tempore, atque rem nam numquam adipisci exercitationem possimus expedita?</p>
        <div className="footer-icons">
            <img src="esrb-privacy-footer.avif" alt="" />
          
        </div>
    </div>
    <div className="footer-content-center">
        <h2>Company</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>

        </ul>
    </div>
    <div className="footer-content-right">

        <h2>Get in touch</h2>
        <ul>
            <li>1292392002</li>
            <li>Piyush@example.com</li>
        </ul>


    </div>
  


</div>

<hr/>

<div className="copyright">

<p>Copyright 2024 © Pro-games.com - All Rights Reserved</p>

</div>

    </div>
    </>
  );
};

export default Footer;