// if var replace by let const which means Temporal Dead Zone
// Temporal Dead Zone which means that create a dead zone before "let" we can excess dead zone error can show
// OR  A temporal dead zone (TDZ) in JavaScript is the period from the start of a block's scope until the variable's declaration and initialization are reached
age = 100;

console.log("Value of age is", age);

var age = 30;

console.log("Value of age is", age);
