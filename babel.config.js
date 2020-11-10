// 生产环境下清除console打印
const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}
module.exports = {
  presets: [['@vue/app', {
    useBuiltIns: 'entry'
  }],
  ],
  plugins: [
    [
      'component',
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      },
    ],

    // 发布产品时候的插件数组
    ...prodPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]

}


