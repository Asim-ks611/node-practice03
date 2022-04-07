// Node Js has inbuilt library cypto for cryptography.
// we will use crypto.createCipheriv(algorithm, key, iv[, options]) method for encryption.
// and crypto.createDecipheriv(algorithm, key, iv[, options]) for decryption.
// CCM (counter with cipher block chaining message authentication code; counter with CBC-MAC) - a mode of operation for cryptographic block ciphers.
// OCB (Offset codebook mode) - an authenticated encryption mode of operation for cryptographic block ciphers.
//aes : Advanced Encryption Standard(a specification for the encryption of electronic data established by the U.S)

const { createCipheriv,createDecipheriv,randomBytes} = require('crypto');

const algo = "aes-256-cbc" //128,192,256 bits size 
const key = randomBytes(32)
const iv = randomBytes(16) //initialization vector


//////// ENCRYPTION ////////////
function encrypt(string){
    let cipher = createCipheriv(algo,key,iv)
    let encryptedString = cipher.update(string)
    encryptedString = Buffer.concat([encryptedString, cipher.final()]);
    let encryptedObj = {
        iv: iv.toString('hex'),
        encryptedData: encryptedString.toString('hex') 
    }
    return encryptedObj
}

//////// DECRYPTION ////////////

function decrypt(encryptedObj) {
    let iv = Buffer.from(encryptedObj.iv, 'hex');
    let encryptedText = Buffer.from(encryptedObj.encryptedData, 'hex');
    let decipher = createDecipheriv(algo,key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
 }

 let encData = encrypt("asim")
 console.log(encData);
console.log(decrypt(encData))