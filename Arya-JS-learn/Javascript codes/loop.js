for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("<br>");

var x = 1;
while (x <= 5) {
  console.log(x);
  x++;
}

console.log("<br>");

var z = 1;
do {
  console.log(z);
  z++;
} while (z < 8);

person = {
  firstname: "Arya",
  lastname: "patel",
  eyecolor: "brown",
};

// ===================for in loop=====================
// +++++++++++++++++++++++++++++++
// for in loop only use for object
// +++++++++++++++++++++++++++++++

for (value in person) {
  console.log(person);
  console.log("<br>");
  console.log(person[value]);
  console.log("<br>");
  console.log(value);
}

// ===================for of loop=====================
// +++++++++++++++++++++++++++++++
// for of loop use for object, arrya ,string
// +++++++++++++++++++++++++++++++

var alpha = ["A", "B", "C", "D"];

for (let i = 0; i <= alpha.length - 1; i++) {
  console.log(alpha);
  console.log(alpha[i]);
}

// ===================for of loop=====================
console.log("<br>");
for (value of alpha) {
  console.log(value);
}

const A = "Arya";

for (value of A) {
  console.log(value);
}

// ???????????????????????????????????????
//  whaile loop
// var i = 1;

// while (i <= 10) {
//   console.log("5 * " + i + " = " + 5 * i);
//   i++;
// }
for (i = 1; i <= 10; i++) {
  console.log("5 * " + i + " = " + 5 * i);
}

console.log("  ");
// Do while loop

var a = 1;
do {
  console.log("5 * " + a + " = " + 5 * a);
  a++;
} while (a <= 10);

var sum = 0;
for (num = 1; num <= 10; num++) {
  var sum = sum + num;
  console.log(sum);
}

// Prime Number
var num = 13;
var isPrime = true;
for (var i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(num + " num is prime");
} else {
  console.log(num + " num is not prime");
}

// ***** Leap Year
var year = 2021;

if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
  console.log(year, "its a leap year");
} else {
  console.log(year, "its not a leap year");
}

// ********** pattern
for (i = 1; i <= 5; i++) {
  var pattern = " ";

  for (j = 1; j <= i; j++) {
    pattern = pattern + " * ";
  }
  console.log(pattern);
}

// forEach loop
const language = ["HTML", "CSS", "JAVA", "BOOTSTRAP", "PYTHON"];

language.forEach((curElem, index, arr) => {
  console.log(`${curElem} ${index}`);
  console.log(arr);
});

console.log(" ");
console.log(" ");

// map functoion
const myMapArr = language.map((curElem, index, arr) => {
  return `${curElem} ${index} `;
});

console.log(myMapArr);

const myMapArr1 = language.map((curElem, index, arr) => {
  return `I have knwledge in ${curElem}  `;
});

console.log(myMapArr1);

// forEach

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((curElem) => {
  console.log(curElem * 2);
  // perform an action on each element
});

// map function

const newarr = numbers.map((curElem) => {
  return curElem * 2;
  // creates a new array with trasformed elements
});

console.log(newarr);

// push method
numbers.push(6);
console.log(numbers);
// add one ane more element in array
// push method Returns a new length

// pop method
numbers.pop();
console.log(numbers);
// removes the olast element in array

// shift method
numbers.shift();
console.log(numbers);
// remove first element in array

// unshift method
numbers.unshift(1);
console.log(numbers);
// add one or more element begining of an array element in array

// methods
// splice method
let fruits = ["apple", "banana", "mango", "orange"];
fruits.splice(1, 1, "graps");
console.log(fruits);

let fruits2 = ["apple", "banana", "mango", "orange"];
fruits2.splice(fruits2.length, 0, "graps");
console.log(fruits2);
console.log(" ");
console.log(" ");

// task
// add month name
const months = ["jan", "march", "april", "may"];
console.log(months);

months.splice(months.length, 0, "june");
console.log(months);

console.log();
// update name of month
const indexToUpdate = months.indexOf("march");
console.log(indexToUpdate);
months.splice(indexToUpdate, 1, "March");
console.log(months);

const indexToDelete = months.indexOf("june");
months.splice(indexToDelete, 1);
console.log(months);
console.log();

let Trim = "   Hello World   ";
let Trim111 = Trim.trim(Trim);
console.log(Trim111);
console.log();

// 1. Print A to z alphabet

console.log("A".charCodeAt());
console.log("Z".charCodeAt());
console.log();
console.log("a".charCodeAt());
console.log("z".charCodeAt());
  console.log(String.fromCharCode("z"));

console.log();

// print a to z alphabet in small
for (let char = 97; char <= 122; char++) {
  console.log(String.fromCharCode(char));
}
for (let char = 97; char <= 122; char++) {
  console.log(char);
}
console.log();

// 2. Write a function to check if all vowels are present or not in string

const presentVowelsOpNot = (str) => {
  const vowels = "aeiou";

  for (let char of vowels) {
    // console.log(vowels);
    // console.log(str.includes(char));

    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
};

console.log(presentVowelsOpNot("my name is arya patel"));

// 3. write a function to count  number of vowels in string ?

const countVowels = (str) => {
  const vowels = "aeiou";

  let count = 0;
  for (let char of str) {
    console.log(char);
    // console.log();

    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(countVowels("Hello world"));
