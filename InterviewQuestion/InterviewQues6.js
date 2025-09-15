variable = 10;

(
    () =>
    {
        // invoke it
        foo = 100;
        console.log(variable);
        var foo = 100;
        variable = 20;
        console.log(variable);
        
    }
    )();
    console.log(foo);
    console.log(variable);
    var variable = 30;

// foo is not defined here