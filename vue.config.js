module.exports = {
  publicPath: "./",
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  transpileDependencies: [
    'resize-detector',
  ],
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require('postcss-px2rem')({
  //           remUnit: 54,
  //           exclude: "/node_modules/i"
  //         })
  //       ]
  //     }
  //   }
  // },
  chainWebpack: config => {
    //发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      //add添加新的打包入口
      config.entry('app').clear().add('./src/main-prod.js')
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
      //使用externals设置排除项
      // config.set('externals', {
      //   vue: 'Vue',
      //   'vue-router': 'VueRouter',
      //   nprogress: 'NProgress',
      // })
    })
    //开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config.entry('app').clear().add('./src/main-dev.js')
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  }

}

