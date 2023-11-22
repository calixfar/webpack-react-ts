const { merge } = require('webpack-merge')
const commongConfig = require('./webpack.common')

module.exports = ({ env }) => {
  envConfig = require(`./webpack.${env}.js`)
  
  return merge(commongConfig, envConfig)
}