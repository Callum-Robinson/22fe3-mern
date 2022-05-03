#!/usr/bin/env node
// #!/usr/bin/node
// Shebang is specified on the first line of a file
// - it specifies the binary/application to run this file with
// - on Windows, it must be on the path
// We can also look it up with the env command line utility as well:
// - #!/usr/bin/env node

// Running this file:
// Method 1: Open a terminal in the current directory and enter `node app.js`
// Method 2: Use a shebang, and call the file by its name (without the file ending) from the bash terminal, i.e, ./App


console.log("Hello world");

// format specifiers
// - we can use these to insert values into text
// - %s for strings
// - %d for numbers
// console.log(formatString, args...);
const username = "Bob";
console.log("Hello %s", username);
console.log("Hello %s, we can insert multiple strings: %s", username, "inserted");
console.log();

// logging objects
const user = {
    "username": "fred",
    "age": 32
}

console.log(user); // prints a js object representation
console.log();

// printing stack traces
function foo() {
    console.log("foo");
    bar();
}

function bar() {
    console.log("bar");
    other();
}

function other() {
    console.trace(); // prints all functions called in the stack up to this point
}

foo();
console.log();
// Top of the stack   : other()
// Middle of the stack: bar()
// Bottom of the stack: foo()

// Coloured text output
const PREFIX = '\x1b';
const RESET = PREFIX + "[0m";

// Foregrounds
const FG_BLACK = PREFIX + "[30m";
const FG_RED = PREFIX + "[31m";
const FG_GREEN = PREFIX + "[32m";
const FG_YELLOW = PREFIX + "[33m";
const FG_BLUE = PREFIX + "[34m";
const FG_MAGENTA = PREFIX + "[35m";
const FG_CYAN = PREFIX + "[36m";
const FG_WHITE = PREFIX + "[37m";

// Backgrounds
const BG_BLACK = PREFIX + "[40m";
const BG_RED = PREFIX + "[41m";
const BG_GREEN = PREFIX + "[42m";
const BG_YELLOW = PREFIX + "[43m";
const BG_BLUE = PREFIX + "[44m";
const BG_MAGENTA = PREFIX + "[45m";
const BG_CYAN = PREFIX + "[46m";
const BG_WHITE = PREFIX + "[47m";


// interpolated strings (ES2015 template literals)
// - strings with backticks
// - we can put expressions inside ${} in a string to insert the values
console.log(`Hello ${FG_YELLOW}BOB${RESET}.`);
console.log(`Hello ${BG_CYAN}${FG_YELLOW}BOB${RESET}.`);
// console.log("Hello " + FG_YELLOW + "Bob" + RESET + ".");