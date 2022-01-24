import React from 'react'

import PropTypes from 'prop-types'
import {Translate, withLocalize} from 'react-localize-redux'
import {useStore} from 'react-redux'

import {ActiveLang} from '../../../../infra/config/LocalStorageKeys'
import {
  LangOption,
  MobileLanguageSelector,
  LanguageWrapper
} from '../HeaderStyles'
import MenuList from './MenuList'
import {
  List,
  ListItem,
  ListLink,
  Underline,
  Wrapper
} from './MobileMenuStyles'

const MobileMenu = ({
  toggled,
  languages,
  activeLanguage,
  setActiveLanguage,
  active
}) => {
  const store = useStore()
  const tempUser = localStorage.getItem('user')
  const user = JSON.parse(tempUser)

  const toggleLanguage = (e) => {
    store.dispatch(setActiveLanguage(parseInt(e.target.value, 10)))
    localStorage.setItem(ActiveLang, parseInt(e.target.value, 10))
  }

  return (
    <Wrapper toggled={toggled}>
      <List>
        {!user &&
          MenuList.map((menu) => (
            <ListItem key={menu.id}>
              <ListLink href={menu.link}>
                <Translate id={menu.name} />
                <Underline />
              </ListLink>
            </ListItem>
          ))}
        {user &&
          MenuList.filter((x) => x.logged === true).map((menu) => (
            <ListItem key={menu.id}>
              <ListLink href={menu.link}>
                <Translate id={menu.name} />
                <Underline />
              </ListLink>
            </ListItem>
          ))}
      </List>
      <LanguageWrapper>
        <MobileLanguageSelector
          value={activeLanguage?.code || 2}
          active={active}
          name='language'
          id='lang'
          tag='select'
          onChange={(e) => toggleLanguage(e)}
        >
          {languages.map((language, index) => (
            <LangOption key={index} value={language.code}>
              {language.abrev}
            </LangOption>
          ))}
        </MobileLanguageSelector>
      </LanguageWrapper>
    </Wrapper>
  )
}

MobileMenu.propTypes = {
  toggled: PropTypes.bool.isRequired
}
export default withLocalize(MobileMenu)
