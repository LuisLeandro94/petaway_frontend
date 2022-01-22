import {initialize, addTranslationForLanguage} from 'react-localize-redux'

import {
  AuthTokenKey,
  ActiveLang
} from '../../infra/config/LocalStorageKeys'
import {Languages} from '../../infra/translations/AvailableTranslations'
import EN from '../../infra/translations/en'
import {updateInfo} from '../data/info/InfoActions'
import {userSave} from '../data/user/UserActions'

export default function start() {
  return async (dispatch, activeLanguage, setActiveLanguage) => {
    try {
      const deflang = localStorage.getItem(ActiveLang)
      console.log(deflang)
      dispatch(
        initialize({
          languages: Languages,
          options: {
            renderToStaticMarkup: false,
            defaultLanguage: parseInt(deflang, 10)
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
      console.log(error)
    }
  }
}
