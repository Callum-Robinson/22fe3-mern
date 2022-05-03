// JavaScript variables
// Three different ways:
// - var x = 3;
// - const x = 7;
// - let x = 32;

// Scope
// Where the variable is accessible (each variable has a container of a sorts)
// - var    : Function scope
// - let    : Block scope
// - const  : Block scope

// 56
// fizz() printed 112
// x is now 112 after first bar call
// x is now 224 after second bar call

function foo() {
    bar(32); // 32
    bar("hello");
}

function bar(input) {
    console.log(input);
    x *= 2;
    if (typeof input == "number") console.log(fizz(input));
}

function fizz(num) {
    console.log(x); // 112
    return num % 2 == 0 ? "fizz" : "buzz";
}

{
    var x = 56;

    {
        let x = 3;
    }
    console.log(x); // 56
    foo();
    console.log(x); // 224
}

// x = 56
// inner scope: x = 3 (not accessible anywhere outside its block)
// logs 56
// call foo()

// call bar(32)
// logs 32
// x = 112
// input is a number, calls fizz(input)

// fizz() logs 112
// returns "fizz"

// bar("hello")
// logs "hello"