const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.less'],
      alias: {
        '@': resolve('src'),
        'vue': 'vue/dist/vue.esm-bundler.js'
      }
    }
  }
}