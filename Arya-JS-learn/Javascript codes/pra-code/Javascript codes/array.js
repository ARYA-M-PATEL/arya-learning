const myArr = [0, 1, 2, 3, 4];
const myHerose = ["saktiman", "nagraj"];

const Arr2 = new Array(1, 2, 3, 4);
console.log(myArr[0]);
console.log(myArr[1]);

// Array method===

// ===push use for add value in array====
// ===pop use for remove last value in array====

myArr.push(5);
myArr.push(6);
myArr.push(9);
myArr.pop();

console.log(myArr);
console.log(myArr.indexOf(4));
console.log(myArr.includes(4));

// slice  and splice=====
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

console.log("C ", myArr);

// ========concate array=======
const marvel_Heros = ["thor", "ironman", "spiderman"];
const dc_Heros = ["super man", "abd", "bgdj"];

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros)

const all_Heros = marvel_Heros.concat(dc_Heros);
console.log(all_Heros);

// ==mostly usable==
const all_new_heros = [...marvel_Heros, ...dc_Heros];
console.log(all_new_heros);

console.log(Array.from("Arya"));

let run1 = 100;
let run2 = 200;
let run3 = 300;

console.log(Array.of(run1, run2, run3));

const myArray = ["a", "b", "c", "d"];

let arr = 0;
while (arr < myArray.length) {
  console.log(`value is ${myArray[arr]}`);
  arr = arr + 1;
}

// *********array represent by Three method********

// =============array using literals===========
console.log("<h3>array using literals</h3>");

var employee = ["abc", "abc1", "abc2"];
console.log(employee);

for (value of employee) {
  console.log(value);
}

// =============array using new keyword===========
console.log("<h3>array using  new keyword</h3>");

var fruits = new Array();

fruits[0] = "orange";
fruits[1] = "mango";
fruits[2] = "apple";

for (value of fruits) {
  console.log(value);
}

// =============array using constructor===========
console.log("<h3>array using  constructor</h3>");

var cars = new Array("mercedes", "oooo", "range rover");

for (value of cars) {
  console.log(value);
}

console.log(" ");
// ***********Various methods of array************

console.log("concate arrays by  concat() method");

arr1 = ["c", "c++", "java"];
arr2 = ["python", "js", "bs"];

const abc = arr1.concat(arr2);
const abc1 = arr2.concat(arr1);
console.log(abc);
console.log(abc1);
console.log(" ");

console.log(" copyWithin() method");
// const copyWithinArray = arr2.copyWithin(start, firstelement, lastelememnt)
const copyWithinArray = arr2.copyWithin(0, 0, 2);
console.log(copyWithinArray);
console.log(" ");

console.log(" every() method");
const arr3 = [50, 31, 55, 32];

function check(value) {
  return value > 30;
}

const entriesArray = arr2.entries();

for (value of entriesArray) {
  console.log(value);
}

// this sentex chek Node. is greter or not in array
console.log(arr3.every(check));
console.log(" ");

// ***in other array and this multidimesion array convert in one arra by  flat() method***
console.log("flat() method");

const arr4 = [11, 12, [13, 14], [15, 16, 17], 18, 19, 20];

const flatArray = arr4.flat();

console.log(flatArray);

// ***in other array i will perform any operation so use flatMap() method***
console.log("flatMap() method");

const arr5 = [2, 4, 6, 8];
const flatMapArray = arr5.flatMap(x => [x + 2]);
const flatMapArray1 = arr5.flatMap(x => [x / 2]);
const flatMapArray2 = arr5.flatMap(x => [x * 2]);
const flatMapArray3 = arr5.flatMap(x => [x - 3]);

console.log(flatMapArray);
console.log(flatMapArray1);
console.log(flatMapArray2);
console.log(flatMapArray3);

// ***in array i will change value so use fill() method***
console.log("fill() method");

const lang = ["html", "css", "js"];

const result1 = lang.fill("bootstrap");
console.log(result1);

const result2 = lang.fill("next.js",1,2);
console.log(result2);

