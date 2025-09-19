  const girija =
  {
    name: "Girija vaidya",
    sayName: function ()
    {
        console.log(this.name);
    },
  };

  const sanket = 
  {
    name: "Sanket Kaleshwar",
    sayName: function ()
    {
        console.log(this.name);
    },
  };

//   .call method using the sanket object

// independent function  output is undefined
// function sayName()
// {
//     console.log(this.name); 
    
// }

  sanket.sayName.call(girija);