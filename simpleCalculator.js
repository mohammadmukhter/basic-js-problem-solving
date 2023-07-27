function simpleCalculator(num1, num2, operator){

    switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if (num2 === 0) {
            return "Sorry Cannot divide by zero!";
          }
          return num1 / num2;
        default:
          return "Invalid operator!, Please provide absolute operator";
      }
}

const num1= 5;
const num2= 8;
const operator = "*";

const calculatedData = simpleCalculator(num1, num2, operator);
console.log(calculatedData);