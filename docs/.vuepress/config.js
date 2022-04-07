// const VueExamplePlugin = require('vuepress-plugin-vue-example')
const { copyCode } = require('vuepress-plugin-copy-code2')
const path = require('path')

module.exports = {
  title: 'DEKP Agnostic UI Library',
  themeConfig: {
    // darkMode: false,
    sidebar: [
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/DekpButton.md',
          '/components/DekpInput.md',
          '/components/DekpTextarea.md'
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    // copyCode({
    //   // your options
    // })
    // VueExamplePlugin({
    //   // You need to provide a directory that all the example .vue files will be stored.
    //   // You can use sub-directories to separate examples into categories.
    //   componentsPath: '/docs/.examples/'
    // })
  ],
}