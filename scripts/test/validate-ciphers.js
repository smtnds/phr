
import { spawnSync } from 'child_process'

// const algorithm = 'aes-192-cbc'

const validate = ({ algorithm = 'aes-192-cbc' }, {key, nonce}, filepath) => {
  const enc = spawnSync('open-ssl',[
    `enc -${algorithm}`
    `-e`, // encrypt
    // `-d`, // decrypt
    `-a`, // base64 encode
    `-K ${key}`, // The actual key to use: this must be represented as a string comprised only of hex digits. If only the key is specified, the IV must additionally specified using the -iv option. When both a key and a password are specified, the key given with the -K option will be used and the IV generated from the password will be taken. It does not make much sense to specify both key and password.
    `-iv ${nonce}`,
    `-p`, // Print out the key and IV used.
    // `-out ${filepath}.enc`,
    // `-out ${filepath}.txt`,
    `-in ${filepath}`
    ])
  return enc
}
