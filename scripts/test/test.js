
import {
  cipher,
  decipher
} from '../dist/aes-cbc.esm.js'

import { keyGenerator } from './key-generator.js'

import {
  readFileSync
} from 'fs'

import { log } from './logger.js'

// Use `crypto.randomBytes` to generate a random iv instead of the static iv
// shown here.
let key
const password = 'Password used to generate key'
const salt = 'salt'

const knownNonce = {}

/** @see {@link https://nodejs.org/api/crypto.html#crypto_ccm_mode} */
const TEST = Object.freeze({
  plaintext: 'some clear text data',
//   encrypted: 'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa'
})

const TESTS = [
  // TEST,
  {
    plaintext: (readFileSync('./test/bacon-ipsum/plaintext.txt')).toString().trim(),
    encrypted: (readFileSync('./test/bacon-ipsum/ciphertext.enc')).toString().trim()
  }
]

const doTest = async TEST => {
  // The IV is usually passed along with the ciphertext.
  // const nonce = Buffer.alloc(16, 0) // Initialization vector. }

  console.time('AES CBC Cipher - test case.')

  console.log('Testing with data:')
  console.dir(TEST)

  const { nonce, encrypted } = await cipher({ key }, TEST.plaintext)
  // console.log('cipher', chunks, nonce)
  // console.assert(chunks && chunks.length, 'should have chunks.')

  console.assert(typeof (encrypted) === 'string', 'should have encrypted message.')
  console.assert(typeof (nonce) !== 'undefined', 'should have unique nonce.')
  console.assert(typeof (knownNonce[nonce]) === 'undefined' && (knownNonce[nonce] = true), 'should be a unique nonce.')

  console.assert(encrypted !== TEST.plaintext, 'should not match plaintext.')
  console.assert(!encrypted.includes(TEST.plaintext), 'should contain plaintext.')

  // if (!TEST.encrypted) { return }
  const { plaintext } = await decipher({ key, nonce }, encrypted)
  console.log('decipher:plaintext', plaintext)

  console.assert(plaintext === TEST.plaintext, 'should match original plaintext.')
  // console.assert(chunks && chunks.length, 'should have chunks.')

  console.timeEnd('AES CBC Cipher - test case.')

  // return Promise.resolve()
}

const init = async () => {
  key = await keyGenerator(password, salt)
  for (const test of TESTS) {
    await doTest(test)
  }
}

init()
