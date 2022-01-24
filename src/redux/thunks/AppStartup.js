import {initialize, addTranslationForLanguage} from 'react-localize-redux'

import {
  AuthTokenKey,
  ActiveLang
} from '../../infra/config/LocalStorageKeys'
import {Languages} from '../../infra/translations/AvailableTranslations'
import {updateInfo} from '../data/info/InfoActions'
import {userSave} from '../data/user/UserActions'

export default function start() {
  return async (dispatch) => {
    try {
      dispatch(
        initialize({
          languages: Languages,
          options: {
            renderToStaticMarkup: false,
            defaultLanguage:
              parseInt(localStorage.getItem(ActiveLang), 10) || 2
          }
        })
      )
      Languages.forEach((lang) => {
        dispatch(addTranslationForLanguage(lang.file, lang.code))
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
      console.error(error)
    }
  }
}
