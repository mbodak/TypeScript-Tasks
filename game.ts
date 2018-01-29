function game(num1: number, num2: number) {
    let max = num1;
    let min = num2;
    if (num1 > num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    let random: number = getRndInteger(min, max);

}

function getRndInteger(min, max) {
    return (Math.floor(Math.random() * (max - min) ) + min);
}

