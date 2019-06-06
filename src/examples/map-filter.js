const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Colin', 'Kevin', 'Raney', 'Brian'];

const addedNums = arr.map((arrItem) => {
    if (typeof arrItem === 'string') {
        return `${arrItem} is not a number`;
    } else {
        const sum = arrItem + 2;
        return `${arrItem} + 2 = ${sum}`;
    }
});
console.table(addedNums);


const result = arr.filter((arrItem) => {
    return arrItem % 2 === 0;
});
console.table(result);