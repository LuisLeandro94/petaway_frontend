import {initialize, addTranslationForLanguage} from 'react-localize-redux'

import {AuthTokenKey} from '../../infra/config/LocalStorageKeys'
import EN from '../../infra/translations/en'
import {updateInfo} from '../data/info/InfoActions'
import {userSave} from '../data/user/UserActions'

const DefaultLangs = [
  {name: 'Portuguese', code: 1, languageId: 1, abrev: 'pt'},
  {name: 'English', code: 2, languageId: 2, abrev: 'en'}
]

export default function start() {
  return async (dispatch) => {
    try {
      dispatch(
        initialize({
          languages: DefaultLangs,
          options: {
            renderToStaticMarkup: false,
            defaultLanguage: 2
          }
        })
      )
      DefaultLangs.forEach((lang) => {
        dispatch(addTranslationForLanguage(EN, lang.code))
      })

      const authToken = localStorage.getItem(AuthTokenKey)

      if (authToken) {
        dispatch(userSave({email: 'superuser', name: 'SuperUser'}))
      }

      dispatch(
        updateInfo({
          ready: true
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
}
