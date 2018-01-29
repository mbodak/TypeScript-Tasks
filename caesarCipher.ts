function caesarCipher(str: string, key: number) {
    let arr: number[] = [];
    let encryptedArr: string[] = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i) + key;
        encryptedArr[i] = String.fromCharCode(arr[i]);
    }
    let encryptedStr: string = encryptedArr.join("");
    return (encryptedStr);
}

console.log(caesarCipher("Hello", 5));