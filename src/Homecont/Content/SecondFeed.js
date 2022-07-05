import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import React from 'react'
import './SecondFeed.css'
import SupportIcon from '@mui/icons-material/Support';
import GppGood from '@mui/icons-material/GppGood'
import Cached from '@mui/icons-material/Cached'
import LocalShipping from '@mui/icons-material/LocalShipping'

function SecondFeed() {
  return (
    <div className="support">
        <div className="support-security">
          <GppGood  />
          <h4 className="header-comp">Security</h4>
          <p>100% save online payments</p>
        </div>
        <div className="support-return">
          <Cached/>
          <h4 className="header-comp">30 days return period</h4>
          <p>Easy return & refund</p>
        </div>
        <div className="support-cust">
          <SupportIcon/>
          <h4 className="header-comp">Customer Support</h4>
          <p>We are here 24/7</p>
        </div>
        <div className="support-del">
          <LocalShipping disabled/>
          <h4 className="header-comp">Felixible Shipping</h4>
          <p>Maximum support</p>
        </div>
      </div>
      

    









  )
}

export default SecondFeed