function generate(rowNumber) {
    function generateRow(row) {
        if (row === 0) {
            return 1;
        } else {
            const prevRow = generateRow(row - 1);
            const currentRow = [1];
            for (let i = 1; i < row; i++) {
                currentRow[i] = prevRow[i - 1] + prevRow[i];
            }
            currentRow.push(1);
            return currentRow;
        }
    }

    return generateRow(rowNumber);
}

//export default generate;
console.log(generate(1));
console.log(generate(4));
console.log(generate(2));