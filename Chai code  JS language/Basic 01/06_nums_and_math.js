const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); 

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());


//===================== MATHS ===================================

console.log(Math);
console.log(Math.abs(-4))
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log((Math.random()*10) + 1);

/* Key Methods of the Math Object
Basic Arithmetic Operations:
Math.abs(x): Returns the absolute value of 
x
x.
Math.round(x): Rounds 
x
x to the nearest integer.
Math.ceil(x): Rounds 
x
x upwards to the nearest integer.
Math.floor(x): Rounds 
x
x downwards to the nearest integer.
Exponents and Roots:
Math.pow(base, exponent): Returns the value of 
base
exponent
base 
exponent
 .
Math.sqrt(x): Returns the square root of 
x
x.
Math.cbrt(x): Returns the cube root of 
x
x.
Random Numbers:
Math.random(): Returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).
Trigonometric Functions:
Math.sin(x), Math.cos(x), Math.tan(x): Return the sine, cosine, and tangent of angle 
x
x (in radians).
Math.asin(y), Math.acos(y), Math.atan(y): Return the arcsine, arccosine, and arctangent of 
y
y.
Logarithmic Functions:
Math.log(x): Returns the natural logarithm (base 
e
e) of 
x
x.
Math.log10(x): Returns the base-10 logarithm of 
x
x.
Math.log2(x): Returns the base-2 logarithm of 
x
x.
Constants
The Math object also includes several mathematical constants:
Math.PI: The value of π (approximately 3.14159).
Math.E: The base of natural logarithms (approximately 2.71828).
Other constants like Math.SQRT2, Math.LN2, and more provide useful mathematical values.*/
