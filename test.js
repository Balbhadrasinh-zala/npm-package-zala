const myPackage = require('npm-package-zala'); // Replace 'your-package-name' with your actual package name

const num1 = 5; // Replace with the first number entered by the user
const num2 = 7; // Replace with the second number entered by the user

try {
  const sum = myPackage.calculateSum(num1, num2);
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
} catch (error) {
  console.error(error.message);
}
