const odds = [1, 3, 5];

const evens = odds.map(makeEven);
odds;
evens;

function makeEven(value, index, arr) {
    return value + 1;
}