// Arithmetic Operators
// sum
var x=1;
var y=2;
var z=x+y;
console.log("Sum:"+z);

// Sub
var x=10;
var y=8;
var z=x-y;
console.log("Sub:"+z);

//Multiplication

var x=3;
var y=6;
var z=x*y;
console.log("Multiplication:"+z);

//div
var x=24;
var y=2;
var z=x/y;
console.log("Division:"+z);

// Exponentiation
var x=2;
var y=3;
var z=x**y;
console.log("exponeint:"+z);

//Modulus
var x=60;
var y=3;
var z=x%y;
console.log("modulus:"+z);

// increament and decrement
let a=2;
console.log("before increment:"+a);
a++;
console.log("after increment:"+a);
a--;
console.log("after decrement:"+a);

let b=5;
console.log("before increment:"+b);
b++;
console.log("after increment:"+b);
b--;
console.log("after decrement:"+b);

let c=a+b;
console.log(c);

//ASSIGNMENT OPERATORS
var z=13;
z+=5;
console.log("z value is:"+z);

//Example:
// x = y -------Same As---------- x = y
// x += y -------Same As ------- x = x + y
// x -= y -------Same As ------- x = x - y
// x *= y -------Same As ------- x = x * y
// x /= y -------Same As ------- x = x / y
// x %= y -------Same As ------- x = x % y
// x **= y -------Same As ------- x = x ** y


let m=20;
m&&=10;
console.log("m value is:"+m+"AND operator");

let n=20;
n||=10;
console.log("n value is:"+n+"OR operator");