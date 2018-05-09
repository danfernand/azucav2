// @flow

export type MenuItem = {
  name: string,
  description: string,
  price?: string,
}

export type MenuSection = {
  sectionName: string,
  items: Array<MenuItem>,
}

export type Menu = Array<MenuSection>
