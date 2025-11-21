// All code is in Global excution context
// Js Engine =  Global excution context {.. } 
// store to this variable
// if u use this so they point for window object
var val1 = 10;
var val2 = 25;
function addNum(num1, num2)
{
    // call the function
    var result = num1 +num2;
    return result;
}
 var res = addNum (val1, val2)
 console.log(res);
 