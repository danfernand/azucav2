// @flow

import * as React from 'react'
import yelp from 'images/entertainment/yelp.png'
import tripadvisor from 'images/entertainment/tripadvisor.png'
import urbanspoon from 'images/entertainment/urbanspoon.png'


const Comments = () => {
  return (
    <div className="content-git-comments">
      <p>
        {'We hope you have enjoyed your visit with us. Please take a few minutes to give us your thoughts by sending us an email to '}
        <a href="mailto:chef@azuca.net">{'chef@azuca.net'}</a>
        {'. Leave your contact details if you like to stay informed of our exclusive offers, theme nights and special events.'}
      </p>
      <p>
        {'Here at Azuca we are committed to provide all our customers with an experience of exceptional service and a high quality product. Although we strive to excel in all aspects there is always an opportunity to improve. Please take a moment to let us know your impressions of your recent visit with us.'}
      </p>
      <div className="content-git-ratings">
        <div className="rating-links">
        	<a href="http://www.yelp.com/biz/azuca-nuevo-latina-san-antonio" target="_blank" rel="noopener noreferrer"><img alt="yelp" src={yelp} /></a>
        	<a href="http://www.tripadvisor.com/Restaurant_Review-g60956-d437262-Reviews-Azuca_Nuevo_Latino_Restaurant-San_Antonio_Texas.html" target="_blank" rel="noopener noreferrer"><img alt="tripadvisor" src={tripadvisor} /></a>
        	<a href="http://www.urbanspoon.com/r/39/430109/restaurant/Southtown/Azuca-Sabor-Latino-San-Antonio" target="_blank" rel="noopener noreferrer"><img alt="urbanspoon" src={urbanspoon} /></a>
        </div>
      </div>
    </div>
  )
}

export default Comments
