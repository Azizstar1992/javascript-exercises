const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let sum = 0;
  
	for(let i of array){
    sum+=i;
  }
  return sum;
};

const multiply = function(a,b) {
  return a*b;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers."); // Handle negative inputs
  if (n === 0 || n === 1) return 1; // Correct base case
  return n * factorial(n - 1); // Recursive case
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
