function histogram(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        let starStr;
        let tmpStr = "*";
        for (let j = array[i]; j > 1; j--) {
            starStr = tmpStr.concat("*");
            tmpStr = starStr;
        }
        console.log(starStr);
    }
}

histogram([4, 9, 7]);