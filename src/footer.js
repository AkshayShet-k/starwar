import React from 'react'
import { Link } from 'react-router-dom';
import footer from './images/footer_logo.png'

function Footer()
{
    return(
        <div className="footer">
  <div className="inner-footer">
  <span>
  <img src={footer} className="logo"/>
  </span>
  <span className="shortcut">
  <Link to = '/terms of use'><a className="end"  href="" > TERMS OF USE</a></Link>
 <Link to ='/legal notices'> <a className="end"  href="">LEGAL NOTICES</a></Link>
  <Link to ='/privacy policy'><a className="end"  href="">PRIVACY POLICY</a></Link>
  <Link to ='/star wars help desk'><a className="end"  href="">STAR WARS HELP DESK</a></Link>
  <Link to ='/star wars at disney stores'><a className="end"  href="">STAR WAR AT DISNEY STORE</a></Link>
  </span> 
  </div>
  <div className="outer-footer">TM &copy lucasfilm ltd. All Rights Reserved</div>
  </div>
    )
}

export default Footer;