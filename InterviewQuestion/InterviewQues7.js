// var make global
// let scope is local so result is 0123456789
// setTimeout() is a function primarily found in web browsers and Node.js environments, used to schedule the execution of a function or a piece of code after a specified delay. This delay is measured in milliseconds.
for (var i = 0; i< 10; i++)
{
   setTimeout(() => console.log(i), 0); 
}