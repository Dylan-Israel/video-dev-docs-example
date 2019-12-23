const arr = [1, 2, 3, 5, 6, 7];

const evens = arr.filter(isEven);

evens;
arr;

function isEven(num) {
    return num % 2 === 0;
}