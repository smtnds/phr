
import build from '../../scripts/build/rollup.server.js'
import pkg from './package.json'

// build.external.push('fs')
build.input = 'src/index.js'
build.output = [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ]

export default build
