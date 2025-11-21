// Excution Context 
// Javascript hoists function declarations AND variable declarations, but not variable assignments.
// 1. Memory : In memory var can intialize
// 2. Code

// call the function
myFun();
// function is in memory phase alocate
// it is call as a reintialize

// Function declaration is overridden.
var myFun = function ()
{
    console.log("First");
};
// call the function
myFun(); 
// function declaration hoisted fully
function myFun()
{
    console.log("Second");
    
}
// call the function
myFun();

// Function declaration myFun() is hoisted first.
// Then var myFun also hoists but does NOT override the function (only sets up variable = undefined).
