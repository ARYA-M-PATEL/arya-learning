const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.7878

console.log(otherNumber.toPrecision(3))

const hundreds = 1000000

console.log(hundreds.toLocaleString()) 

// console.log(hundreds.toLocaleString('en-IN'))

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(5.3));
console.log(Math.round(5.7));
console.log(Math.ceil(5.7));
console.log(Math.floor(5.7));
console.log(Math.min(2,5,6,4,2))
console.log(Math.max(2, 5, 6, 4, 2)) 

console.log(Math.random())
console.log((Math.random() * 10) +1 )
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))

const isEven = 10 % 2 === 0 ? 'number is even' : 'number is odd'
const isOdd = 10 % 3 === 0 ? 'number is even' : 'number is odd'
console.log(isEven)
console.log(isOdd)

