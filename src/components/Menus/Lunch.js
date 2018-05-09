// @flow

import * as React from 'react'
import lunchMenu from 'data/lunch'
import Menu from '../Menu'

const Lunch = () => {
  return (
    <React.Fragment>
      <a href="scripts/pdf/Lunch.pdf" target="_blank">{'Download'}</a>
      <Menu menu={lunchMenu} sectionType="half" />
      <div className="clear">
        <a href="scripts/pdf/Lunch.pdf" target="_blank">{'Download'}</a>
      </div>
    </React.Fragment>
  )
}

export default Lunch
