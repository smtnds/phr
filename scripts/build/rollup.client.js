// import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

export default [
  // browser-friendly UMD build
  // {
  //   input: 'src/cbc/index.js',
  //   output: {
  //     name: 'aes-cbc',
  //     file: pkg.browser,
  //     format: 'umd'
  //   },
  //   plugins: [

  //     resolve(), // so Rollup can find `ms`
  //     commonjs() // so Rollup can convert `ms` to an ES module
  //   ]
  // },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/cbc/index.js',
    external: ['crypto'],
    output: [
      { file: pkg.main, format: 'cjs' }
    ],
    plugins: [
      json({
        const: true
      })
      // uglify({
      //   compress: {
      //     reduce_vars: false,
      //     dead_code: true,
      //     // global_defs: {
      //     //        '@console.log': 'alert'
      //     //     },
      //     drop_console: true, // production only
      //     warnings: true
      //   }
      //   // output: {
      //   //    comments: false
      //   //  }
      // })
    ]
  },
  {
    input: 'src/cbc/index.js',
    external: ['crypto'],
    output: [
      { format: 'es' }
    ],
    plugins: [
      json({
        const: true
      })
      // uglify({
      //   compress: {
      //     dead_code: true,
      //     // global_defs: {
      //     //        '@console.log': 'alert'
      //     //     },
      //     drop_console: true, // production only
      //     warnings: true,
      //     inline: false,
      //     reduce_vars: false
      //   }
      //   // output: {
      //   //    comments: false
      //   //  }
      // })
    ]
  }
]
