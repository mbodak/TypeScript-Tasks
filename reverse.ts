function reverse(str: string) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    return (joinArray);
}

console.log(reverse("I am testing"));