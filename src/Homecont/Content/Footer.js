import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import Facebook from '@mui/icons-material/Facebook';
import { BottomNavigation, Box } from '@mui/material';
import  '../CssHome/HomeFooter.css'

function Footer() {
  return (
    <div>
      <div className="footercont"  sx={{display:{xs:"none", sm:"block"}}}>
			<div className="foot-1">
				<p style={{fontSize:"22px"}}>001-2345-67-89</p>
				<p>Mon.-Fri. 10:00 to 20:00</p>
				<div className="foot-icon">
				 <Facebook disabled/>
				 <YouTubeIcon/>
				 <GoogleIcon/>
				 <InstagramIcon/>
				</div>
			</div>
			<div className="foot-2">
				 <h4 style={{fontWeight:"lighter", textAlign:"start",paddingBottom:"10px"}}>About Shop</h4>
				 <p>About</p>
				 <p>Contact</p>
				 <p>Blog</p>
				 <p>Site Map</p>

			</div>
			
			<div className="foot-3">
				 <h4 style={{fontWeight:"lighter", textAlign:"start",paddingBottom:"10px"}}>Customer Info</h4>
				 <p>Payment</p>
				 <p>Delivery</p>
				 <p>Order Tracking</p>
				 <p>Exchanges & returns</p>
				 <p>Terms & Conditions</p>

			</div>
			<div className="foot-4">
				 <h4 style={{fontWeight:"lighter", textAlign:"start",paddingBottom:"10px"}}>Catalogue</h4>
				 <p>New Incomes</p>
				 <p>Bestsellers</p>
				 <p>sale</p>
				 <p>Size guide</p>

			</div>
			<div className="foot-5">
				<h3 style={{fontWeight:"lighter"}}>News Letter Sign Up</h3>
				<input className="foot-input" placeholder="Enter Your Email..."></input>
				<button className="foot-btn">Sign Me Up</button>
				<p>Be the first to know about our new arrivals and exclusive offers.</p>
			</div>
		</div>
		
		<footer style={{fontWeight:"lighter", paddingTop:"10px",textAlign:"start",fontSize:"13px"}}>© Copyright 2022 Dream-Theme. All rights reserved</footer>
	</div>
    
  )
}

export default Footer