const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const path = require('path')
const copy = require('rollup-plugin-copy')

// https://vitejs.dev/config/
module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.js'),
      name: 'agnostic',
      fileName: (format) => `agnostic.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './styleDictionary/build/scss/' as *;
                        @use './src/assets/scss/tools/' as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '/@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, `./src/assets/scss`),
      '@css-tokens': path.resolve(
      __dirname,
      `./styleDictionary/build/scss/`
      ),
      '@css-components': path.resolve(
        __dirname,
        `./src/assets/scss/components/`
      ),
      '@css-tools': path.resolve(
        __dirname,
        `./src/assets/scss/tools`
      ),
    }
  },
  plugins: [
    vue(),
    copy({
      targets: [
        {
          src: 'dist/style.css',
          dest: 'docs/.vuepress/public/'
        },
      ],
      flatten: false,
      hook: 'writeBundle',
    })
  ]
})
