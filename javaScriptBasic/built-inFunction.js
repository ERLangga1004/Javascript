// TIPE DATA
// typeof
var tipe = typeof 10; //Mengembalikan tipe data dari variabel variable.
console.log('typeof: ' + tipe); //number

// parseInt
var parseInt = parseInt("10");
console.log('parseInt: ' + parseInt); //10

// parseFloat
var parseFloat = parseFloat("10.5");
console.log('parseFloat: ' + parseFloat); //10.5

// isNaN
var isNaN = isNaN('NaN');
console.log('isNaN: ' + isNaN); //true

// STRING
// toUpperCase
var upperCase = "hello".toUpperCase();
console.log('upperCase: ' + upperCase); //HELLO

// toLowerCase
var lowerCase = 'HELLO'.toLowerCase();
console.log('lowerCase: ' + lowerCase); //hello

// trim
var trim = " hello ".trim();
console.log('trim: ' + trim); //'hello'

// charAt
var charAt = "Hello"[0];
console.log('charAt: ' + charAt); //H

// slice(start, end) tidak termasuk end
var slice = "Hello".slice(1, 3);
console.log('slice: ' + slice); //el

// replace (old, new)
var replace = "hello".replace("h", "H");
console.log('replace: ' + replace); //Hello

// ARRAY
// push
var push = [1,2,3].push(4);
console.log('push: ' + push); //4

// pop
var pop = [1,2,3].pop();
console.log('pop: ' + pop); //3

// shift
var shift = [1,2,3].shift();
console.log('shift: ' + shift); //1

// unshift
var unshift = [1,2,3].unshift(0);
console.log('unshift: ' + unshift); //4

//  slice
var slice = [1,2,3].slice(1, 3);
console.log('slice: ' + slice); //2,3

// concat
var concat = [1,2,3].concat([[4,5,6]]);
console.log('concat: ' + concat); //1,2,3,4,5,6

// MATEMATIKA
// abs
var abs = Math.abs(-10);
console.log('abs: ' + abs); //10

// pow 
var pow = Math.pow(2, 3);
console.log('pow: ' + pow); //8

// sqrt
var sqrt = Math.sqrt(9);
console.log('sqrt: ' + sqrt); //3

//  floor
var floor = Math.floor(2.7);
console.log('floor: ' + floor); //2

// ceil
var ceil = Math.ceil(2.7);
console.log('ceil: ' + ceil); //3
