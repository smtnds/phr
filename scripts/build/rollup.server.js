
import common from './rollup.common.js'

const external = [
  'crypto'
  // ...Object.keys(pkg.dependencies)
]

export default {
  external,
  plugins: [
    ...common.plugins
  ]
}
