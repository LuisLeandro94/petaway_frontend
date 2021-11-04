const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugins
} = require('customize-cra')

module.exports = override(
  fixBabelImports('antd ', {
    style: true
  }),
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#0267B2',
      '@link-color': '#0065B5',
      '@success-color': '#f6bbc1',
      '@warning-color': '#faad14',
      '@error-color': '#f5222d'
    }
  }),
  ...addBabelPlugins('@babel/plugin-proposal-optional-chaining')
)
