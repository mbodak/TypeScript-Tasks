function sum(arr: number[]) {
    let tmp = 0;
    let result_sum = 0;
    for (let i = 0; i < arr.length; i++) {
        result_sum = tmp + arr[i];
        tmp = result_sum;
    }
    return (result_sum);
}

console.log(sum([1, 2, 3, 4]));


function multiply(arr: number[]) {
    let tmp = 1;
    let result_mult = 0;
    for (let i = 0; i < arr.length; i++) {
        result_mult = tmp * arr[i];
        tmp = result_mult;
    }
    return (result_mult);
}

console.log(multiply([1, 2, 3, 4]));