function diagonalReverse(matrix: number[][]) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return (matrix);
}

console.log(diagonalReverse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));