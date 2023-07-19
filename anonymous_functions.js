// Task 1: Create an anonymous function that takes two numbers as parameters and returns their sum.
const sum = function (a, b) {
  return a + b;
};

console.log("Task 1 - Result:", sum(3, 5)); // Output: 8


// Task 2: Create an array of numbers and use the map() method with an anonymous function to square each number in the array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});

console.log("Task 2 - Result:", squaredNumbers); // Output: [1, 4, 9, 16, 25]
