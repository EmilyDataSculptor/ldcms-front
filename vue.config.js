const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: './',
  // outputDir: 'dist',
  // assetsDir: '',
  // lintOnSave: false,
  // productionSourceMap: false,
  devServer: {
    port: 8090,
  //   open: true,
  //   overlay: {
  //     warnings: false,
  //     errors: true
  //   },

  }
})
