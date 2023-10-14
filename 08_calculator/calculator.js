const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

 
const sum = function(...numbers) {
  let result = 0;
  
  if(numbers.length == 1 && Array.isArray(numbers[0])) {
    const flattened = numbers[0].flat();
    const result = flattened.reduce((acc, number) => acc + parseFloat(number), 0);
    return result;
  } else if(numbers.length > 1){
    const result = flattened.reduce((acc, number) => acc + parseFloat(number), 0); 
    return result;
  } else {
    return 0;
  } 
};
 
const multiply = function(numbers) { 
  if (arguments.length === 0){
    return 0;
  }
  let result = 1;
  for (let i = 0; i < numbers.length; i++){
    result *= numbers[i];
  }
  return result;
 
};
  
const power = function(number1, number2) {
	return number1**(number2);
  // Math.pow(number, power);
};

const factorial = function(number) {
  let factorialValue = 1;
	if (number === 0 || number === 1){
    return factorialValue;
  }  
  else if (number > 1) {
    for (let i = number; i >= 1; i-- ) {
      factorialValue = factorialValue * i;
    }
  }  
  return factorialValue;
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
