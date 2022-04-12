const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const path = require('path')
const copy = require('rollup-plugin-copy')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, './src/components/index.js'),
      name: 'agnostic-ui-styledic-lib',
      fileName: (format: string) => `agnostic-ui-styledic-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      // output: {
      //   globals: {
      //     vue: 'Vue'
      //   }
      // }
      output: [{
        format: "esm",
        esModule: true,
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }, {
        format: "umd",
        // inlineDynamicImports: true,
        interop: "esModule",
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }, {
        format: 'cjs',
        exports: "named",
        globals: {
          vue: "Vue"
        }
      }],
    },
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
    dedupe: ["vue"],
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
