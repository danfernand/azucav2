// @flow

import * as React from 'react'
import facebook from 'images/footer/facebook.png'
import twitter from 'images/footer/twitter.png'

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="contact-info">
        <div className="footer-text">
          {'Azuca Nuevo Latino | '}
          <span>
            <a href="https://www.google.com/maps/place/709+S+Alamo+St,+San+Antonio,+TX+78205/@29.4171337,-98.4908327,17z/data=!3m1!4b1!4m5!3m4!1s0x865c58a921594609:0xd44cb19082665562!8m2!3d29.4171337!4d-98.488644">
              {'709 S Alamo St, San Antonio, TX 78205'}
            </a>
            {' | '}
          </span>
          <span>
            <a href="tel:+12102255550">
              {'210-225-5550'}
            </a>
          </span>
        </div>
	      <div className="media-icons">
		      <a href="https://www.facebook.com/AzucaNuevoLatino?v=wall">
            <img alt="facebook" src={facebook} />
          </a>
		      <a href="https://twitter.com/Azucalatino">
            <img alt="twitter" src={twitter} />
          </a>
	      </div>
      </div>
    </footer>
  )
}

export default Footer
