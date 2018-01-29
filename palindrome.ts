function isPalindrome(word: string) {
    let strSplit = word.split("");
    let reverseArray = strSplit.reverse();
    let joinArray = reverseArray.join("");
    if (word === joinArray)
        return true;
    else
        return false;
}

console.log(isPalindrome("radar"));