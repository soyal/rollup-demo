// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import url from 'rollup-plugin-url'
// import postcssOptions from './postcss.config'

export default [
  {
    input: 'src/index.jsx',
    external: ['react'],
    plugins: [
      postcss({
        extract: true,
        extensions: ['less'],
        plugins: [require('postcss-cssnext'), require('postcss-flexbugs-fixes')]
      }),

      babel({
        exclude: 'node_modules/**'
      }),

      url({
        limit: 5 * 1024,
        include: ['**/*.png'], // defaults to .svg, .png, .jpg and .gif files
        emitFiles: true // defaults to true
      })
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
]
