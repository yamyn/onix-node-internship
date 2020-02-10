const arr = [1, 2, 3, 4, 5, 6];

// item(s) greater than 3
const validationValue = 3;
const filtered = arr.filter((num) => num > validationValue);

console.log(filtered); // output: [4, 5, 6]
