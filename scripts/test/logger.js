import { inspect } from 'util'

const defaultOptions = { colors: true, compact: false, depth: 5, breakLength: 80 }
function verboseLogger (data, options = {}) {
  console.log(inspect(data, Object.assign({},defaultOptions, options)))
}

export { verboseLogger as log }