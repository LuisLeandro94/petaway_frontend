export const GetAvailableLanguages = () => ['en', 'pt']

export const Languages = [
  {code: 'en', name: 'Inglês'},
  {code: 'pt', name: 'Português'}
]

export const GetTranslationDescription = (code) =>
  Languages.find((x) => x.code === code)?.name
