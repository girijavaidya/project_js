const calculate = (a, b, operation) =>
{
    return operation(a, b);
}

// call to function
// method 1
const addition = calculate (3, 4, function(num1, num2)
{
  return num1 + num2;
})
console.log(addition);

// method 2 callback function is use

const subtraction = (a, b) => a - b;

const subResult = calculate(8, 3, subtraction)

console.log(subResult);


