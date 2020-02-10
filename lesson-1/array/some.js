const arr = [1, 2, 3, 4, 5, 6];


const validation = {
    greaterValid: 4,
    lessValid: 0
};

// at least one element is greater than 4?
const largeNum = arr.some((num) => num > validation.greaterValid);

console.log(largeNum); // output: true

// at least one element is less than or equal to 0?
const smallNum = arr.some((num) => num <= validation.lessValid);

console.log(smallNum); // output: false
