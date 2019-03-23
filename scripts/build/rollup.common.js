// import alias from 'rollup-plugin-alias'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import postcss from 'rollup-plugin-postcss'
import json from 'rollup-plugin-json'
// import filesize from 'rollup-plugin-filesize'
// import prerender from 'rollup-plugin-prerender'
// import babel from 'rollup-plugin-babel'
// import string from 'rollup-plugin-string'
// import pkg from '../package.json'
// import external from '../catalog/elements.catalog.json'
//
// const external = [
//   'crypto'
//   // ...Object.keys(pkg.dependencies)
// ]

export default {
  // external,
  plugins: [
    // alias({
    //   // resolve: ['.json', '.js'],
    //   'package.json': 'package.json',
    //   // 'helpers': 'src/helpers.js',
    //   // 'tokens.scss': 'styles/tokens.scss',
    //   // 'truncate-title': 'node_modules/truncate-title/dist/truncate-title.esm.js',
    //   // 'param-case': 'node_modules/param-case/param-case.js',
    //   'tokens': 'styles/tokens.module.js'
    // }),
    json({
      preferConst: true
    }),
    // string({
    //   // read SVG file for embedding into custom element
    //   include: 'sprites/symbol/svg/sprite.symbol.svg'
    // }),
    // postcss({
    //   inject: false,
    //   exec: true,
    //   extensions: ['.scss'],
    //   use: ['sass']
    // }),
    resolve({
    //    // only: [ 'node_modules/*' ]
    //   // only: []
    }),
    // babel({
    //   include: 'src/**',
    //   runtimeHelpers: true
    // }), // so Rollup can find packages to bundle
    // // prerender({
    // //   include: '*init*'
    // // }),
    commonjs(), // so Rollup can convert packages to ES modules
    // filesize()
  ]
}
