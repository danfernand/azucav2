// @flow

import * as React from 'react'
import OrderNow from 'images/order_now.png'

const Wine = () => {
  return (
    <React.Fragment>
      <p>
        {'We are committed in offering fresh ingredients, coupled with the most authentic Latin-American products and wines available. We work closely with local farmers, markets and vendors, to bring you the highest quality of Latin recipes, created with a new aproach to presentation and flavor.'}
      </p>
      <p>
        {'What we have done is taken traditional ingredients used in South and Central America, Spain, as well as the Caribbean and México and added our own unique yet contemporary flair to create delectable, mouth-watering dishes.'}
      </p>
      <p>
        {'Although honored to be a local and nationally award winning restaurant, we remain dedicated to our patrons and our long-held philosophy that everybody who comes to Azúca’ leaves with a smile!!!'}
      </p>
      <a href="https://eatstreet.com/azuca-sabor-latino/menu?order-source=ORDER_NOW_IFRAME" target="_blank" rel="noopener noreferrer">
        <img alt="order button" width="100px" src={OrderNow} />
      </a>
    </React.Fragment>
  )
}

export default Wine
