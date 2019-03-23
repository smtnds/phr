
import { randomBytes } from 'crypto'

/**
 * Initialization Vector (Nonce)
 *
 * @param  {Number} size    Byte length
 * @return {Promise<String>}  Bytes
 */
export const initializationVector = (size = 16) => (
  new Promise((resolve, reject) => {
    randomBytes(size, (err, buf) => {
      if (err) { reject(err) }
      console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`)
      resolve(buf)
    })
  })
)
