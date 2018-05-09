// @flow

import * as React from 'react'
import Image1_1 from 'images/header/image1-1.png'
import Image1_2 from 'images/header/image1-2.png'
import Image1_3 from 'images/header/image1-3.png'
import Image2_1 from 'images/header/image2-1.png'
import Image2_2 from 'images/header/image2-2.png'
import Image2_3 from 'images/header/image2-3.png'
import Image3_1 from 'images/header/image3-1.png'
import Image3_2 from 'images/header/image3-2.png'
import Image3_3 from 'images/header/image3-3.png'
import Slideshow from './Slideshow'

const Header = () => {
  return (
    <header id="main-header">
      <div className="header-image-wrapper">
	     <header>{'A SENSUAL TRIP THROUGH THE CUISINE OF THE CARIBBEAN, CENTRAL, AND LATIN AMERICA'}</header>
       <Slideshow images={[Image1_1, Image1_2, Image1_3]}/>
       <Slideshow images={[Image2_1, Image2_2, Image2_3]}/>
       <Slideshow images={[Image3_1, Image3_2, Image3_3]}/>
		  </div>
    </header>
  )
}

export default Header
