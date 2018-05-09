// @flow

import * as React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import cx from 'classnames'

type Props = {
  exactSelected?: boolean,
  to: string,
  location: {
    pathname: string,
  },
  label: string,
}

const NavItem = ({ exactSelected = false, to, location, label }: Props) => {
  let selected = location.pathname.indexOf(to) !== -1

  if (exactSelected) {
    selected = location.pathname === to
  }
  const classes = cx('nav-item', {
    selected,
  })
  return (
    <Link className={classes} to={to}>{label}</Link>
  )
}

export default withRouter(NavItem)
