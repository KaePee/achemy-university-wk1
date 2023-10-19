const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const newPrivateKey = secp.secp256k1.utils.randomPrivateKey();
const publicKey = secp.secp256k1.getPublicKey(newPrivateKey);
console.log("Private key -->", toHex(newPrivateKey));
console.log("Public Key -->", toHex(publicKey));
