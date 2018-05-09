// @flow

import * as React from 'react'
import brunchMenu from 'data/brunch'
import Menu from './Menu'

const Brunch = () => {
  return (
    <div className="content-brunch">
      <p>
        {'Join us for our table service brunch, our menu is loaded with traditional and inventive Latin-American dishes, delicious desserts and creative cocktails!'}
      </p>
      <div>
        <a href="pdf/brunch.pdf" target="_blank">{'Download'}</a>
      </div>
      <Menu menu={brunchMenu} sectionType="half" />
      <div className="clear">
        <a href="scripts/pdf/brunch.pdf" target="_blank">{'Download'}</a>
      </div>
    </div>
  )
}

export default Brunch
