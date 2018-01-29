import SimpleCryptoJS from 'simple-crypto-js';

function caesarCipher(str: string, key: number) {
    let simpleCrypto = new SimpleCryptoJS(key);
    let chiperText = simpleCrypto.encrypt(str);
    return (chiperText);
}

console.log(caesarCipher("Hello", 5));