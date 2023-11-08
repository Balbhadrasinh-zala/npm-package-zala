const reverseString = (str) => str.split("").reverse().join("");

// Function to calculate the sum of two numbers
const calculateSum = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  return num1 + num2;
};

module.exports = {
  reverseString,
  calculateSum,
};
