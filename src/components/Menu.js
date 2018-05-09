// @flow

import * as React from 'react'
import type { Menu as MenuType, MenuSection, MenuItem } from 'types'
import cx from 'classnames'

type Props = {
  menu: MenuType,
  sectionType?: 'half' | 'full',
}
const Menu = ({ menu, sectionType = 'full'}: Props) => {
  const renderMenuItem = ({ name, description, price }: MenuItem) => {
    const classes = cx('item-wrapper', {
      half: sectionType === 'half'
    })
    return (
      <div className={classes} key={name}>
				<div className="item-name">{name}</div>
				{price && (
          <div className="item-price">{price}</div>
        )}
				<div className="item-description">{description}</div>
			</div>
    )
  }
  const renderSection = (menuSection: MenuSection) => {
    const classes = cx("section-wrapper", {
      half: sectionType === 'half'
    })
    return (
      <div className={classes} key={menuSection.sectionName}>
			   <h2>{menuSection.sectionName}</h2>
         {menuSection.items.map((item) => renderMenuItem(item))}
      </div>
    )
  }

  return (
    <div className="menu-wrapper">
      {menu.map((menuSection) => renderSection(menuSection))}
    </div>
  )
}

export default Menu
