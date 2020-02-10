const arr = [1, 2, 3, 4, 5, 6];

const validation = {
    greaterValid: 4,
    lessValid: 10
};

// all elements are greater than 4
const greaterFour = arr.every((num) => num > validation.greaterValid);

console.log(greaterFour); // output: false

// all elements are less than 10
const lessTen = arr.every((num) => num < validation.lessValid);

console.log(lessTen); // output: true
