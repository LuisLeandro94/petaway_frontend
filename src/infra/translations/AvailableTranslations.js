import EN from './en'
import PT from './pt'

export const GetAvailableLanguages = () => ['en', 'pt']

export const Languages = [
  {code: 2, name: 'Inglês', value: 'EN', abrev: 'en', file: EN},
  {code: 1, name: 'Português', value: 'PT', abrev: 'pt', file: PT}
  // {code: 'es', name: 'Espanhol', value: 'ES', abrev: 'es'},
  // {code: 'de', name: 'Alemão', value: 'DE', abrev: 'de'},
  // {code: 'fr', name: 'Francês', value: 'FR', abrev: 'fr'},
  // {code: 'nl', name: 'Holandês', value: 'NL', abrev: 'nl'}
]

export const GetTranslationDescription = (code) =>
  Languages.find((x) => x.code === code)?.name
