import React from 'react'

import PropTypes from 'prop-types'

import MenuList from './MenuList'
import {
  List,
  ListItem,
  ListLink,
  Underline,
  Wrapper
} from './MobileMenuStyles'

const MobileMenu = ({toggled}) => (
  <Wrapper toggled={toggled}>
    <List>
      {MenuList.map((menu) => (
        <ListItem key={menu.id}>
          <ListLink>
            {menu.name}
            <Underline />
          </ListLink>
        </ListItem>
      ))}
    </List>
  </Wrapper>
)

MobileMenu.propTypes = {
  toggled: PropTypes.bool.isRequired
}
export default MobileMenu
