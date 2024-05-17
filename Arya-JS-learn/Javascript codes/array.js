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
console.log("A ", myArr);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);

console.log("C ", myArr);
console.log("B ", myArr);

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
console.log(" ");

console.log(" copyWithin() method");
// const copyWithinArray = arr2.copyWithin(start, firstelement, lastelememnt)
const copyWithinArray = arr2.copyWithin(0, 0, 2);
console.log(copyWithinArray);
const copyWithinArray1 = arr2.copyWithin(0, 0, 1);
console.log(copyWithinArray1);
console.log(" ");
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
console.log(" ");

// ***in other array and this multidimesion array convert in one array by  flat() method***
console.log("flat() method");

const arr4 = [11, 12, [13, 14], [15, 16, 17], 18, 19, 20];

const flatArray = arr4.flat();

console.log(flatArray);

// ***in other array i will perform any operation so use flatMap() method***
console.log("flatMap() method");

const arr5 = [2, 4, 6, 8];
const flatMapArray = arr5.flatMap((x) => [x + 2]);
const flatMapArray1 = arr5.flatMap((x) => [x / 2]);
const flatMapArray2 = arr5.flatMap((x) => [x * 2]);
const flatMapArray3 = arr5.flatMap((x) => [x - 3]);

console.log(flatMapArray);
console.log(flatMapArray1);
console.log(flatMapArray2);
console.log(flatMapArray3);

// ***in array i will change value so use fill() method***
console.log("fill() method");

const lang = ["html", "css", "js"];

const result1 = lang.fill("bootstrap");
console.log(result1);

const result2 = lang.fill("next.js", 1, 2);
console.log(result2);

// ***in array i will convert value in element so use Array.form() method***
console.log("Array.from() method");

const fromArray = Array.from("PATEL");

console.log(fromArray);
const func = function () {
  console.log(Array.from(arguments));
};

func("html", "java", "c");
console.log(" ");
console.log(" ");
// ***in array i will saperate value from array so use filter() method***
console.log("filter() method");
const num = [11, 41, 56, 33, 90, 22, 12];

function check1(value) {
  return value > 30;
}

console.log("num array after filter() : " + num.filter(check1));

console.log(" ");
// ***in array i will find value from array so use find() method***
console.log("find() method");

const findArray = num.find((x) => x > 30);
console.log(findArray);

// ***in array i will find value from array so use find() method***
console.log("findIndex() method");

const findIndexArray = num.findIndex((x) => x > 30);
console.log(findIndexArray);

console.log(" ");
// ***in array i will find value is present or not so use includes() method***
console.log("includes() method");

const arrind = ["html", " css", "js", "bs"];
console.log("chek element is include here : " + arrind.includes("js"));
// ans: chek elemene is include here : true
console.log(" ");
console.log(" ");
// ***in array i will find value is present or not so use includes() method***
// console.log("includes() method");

const arrindexof = ["html", "css", "js", "bs", "js"];
// ans: chek elemene is include here : true

console.log(" ");
console.log(" ");

// ***in array i will find index number so use includes() method***
console.log("indexOf() method");
console.log("Index of js : " + arrindexof.indexOf("js"));
console.log("Index of js after position 3 : " + arrindexof.indexOf("js", 3));
console.log(
  "Index of next.js not in array element : " + arrindexof.indexOf("next.js")
);
// Index of next.js not in array element : -1
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

// ***if we are check give is a value array or not Array.isArray() method***
console.log("Array.isArray() method");

console.log(
  "to ckeck if passed value is an array usin isArray() method :" +
    Array.isArray(1, 2, 3, 4)
);
console.log(
  "to ckeck if passed value is an array usin isArray() method :" +
    Array.isArray(arrindexof)
);
console.log(" ");
console.log(" ");

// ***if we are join value and change that data type like array to string use join() method***
console.log("join() method");

console.log("arrindexof after join() : " + arrindexof.join());
console.log("arrindexof after join() : " + arrindexof.join("-"));
console.log("arrindexof after join() : " + arrindexof.join("_"));
console.log("arrindexof after join() : " + arrindexof.join(","));
console.log("arrindexof after join() : " + arrindexof.join(" "));
console.log("arrindexof after join() : " + arrindexof.join("  "));

console.log(" ");
console.log(" ");

// ***if we are key value do use keys() method***
console.log("keys() method");
const arr6 = [3, 5, 6, 4, 8];
const keyArray = arr6.keys();
console.log(keyArray);
// console.log(arr6);
for (k of keyArray) {
  console.log(k);
}

console.log(" ");
console.log(" ");
// ***if we are find index value from last do use lastIndexOf() method***
console.log("lastIndexOf() method");
const lastIndexOf = ["html", "css", "js", "bs", "js"];

console.log(
  "check the index of 'css' using lastIndexOf : " +
    lastIndexOf.lastIndexOf("css")
);

console.log(" ");
console.log(" ");
// ***if we are map current value in other value use map() method***
console.log("map() method");
const arr7 = [5, 10, 150, 20];
const mapArray = arr7.map((x) => x / 5);
console.log(mapArray);

console.log(" ");
console.log(" ");
// ***if we get in array value use of() method***
console.log("of() method");
console.log("generate Array using of() : " + Array.of(1, 2, 4, 3, 6, 4));
console.log(Array.of(1, 2, 4, 3, 6, 4));
console.log(Array.of(1, "hello", 4, 3, 6, 4));

console.log(" ");
console.log(" ");
// ***if we enter a number in array using push() method***
console.log("push() method");

const adarr = [1, 2, 3, 4];
adarr.push(5);
console.log("add 5 using push() : " + adarr);

console.log(" ");
console.log(" ");
// ***if we enter a number in array using push() method***
console.log("pop() method");

adarr.pop();
console.log("remove an element using  pop() : " + adarr);

console.log(" ");
console.log(" ");
// ***if we get number in reverse direction using reverse() method***
console.log("reverse() method");

adarr.reverse();
console.log("element get in reverse direction using  reverse() : " + adarr);

console.log(" ");
console.log(" ");
// ***if we get operation using reduce() method***
console.log("reduce() method");
const redarr = [1, 2, 3, 4, 5];
const ope = redarr.reduce(function (accumulator, currentvalue) {
  return accumulator + currentvalue;
});
console.log("Result after reduce() : " + ope);

const ope1 = redarr.reduce(function (accumulator, currentvalue) {
  return accumulator * currentvalue;
});
console.log("Result after reduce() : " + ope1);

const redarr1 = [5];
const ope2 = redarr1.reduce(function (accumulator, currentvalue) {
  return accumulator + currentvalue;
});
console.log("Result after reduce() : " + ope2);

console.log(" ");
console.log(" ");
// ***if we get operation using some() method***
console.log("some() method");

const somearr = [5, 6, 7, 80];

function test(argument) {
  return argument > 50;
}

const Resultsome = somearr.some(test);
console.log("Dose Array somearr has any value > 50 ? : " + Resultsome);

console.log(" ");
console.log(" ");
// ***if we get operation using every() method***
console.log("every() method");

const everyarr = [90, 60, 70, 80];

function test(argument) {
  return argument > 50;
}

const Resultevery = everyarr.every(test);
console.log("Dose Array everyarr has any value > 50 ? : " + Resultevery);

console.log(" ");
console.log(" ");
// ***if we get operation using sift() method***
console.log("sift() method");

console.log(
  "Removing the very first elememt of Array everyarr : " + everyarr.shift()
);
console.log(everyarr.shift());

console.log(" ");
console.log(" ");
// ***if we get operation using slice() method***
console.log("slice() method");

const slarr = [4, 5, 6, 7, 3, 5, 4, 5];
const slicearray = slarr.slice(4);

console.log("Slice array : " + slicearray);
console.log(slarr);

console.log(" ");
console.log(" ");
// ***if we get operation using slice() method***
console.log("slice() method");

const slarr1 = [4, 5, 6, 7, 3, 5, 4, 5];
// *****NOTE: LAST ELEMENT IS NOT ADD IN SLICE ANS *****
const slicearray1 = slarr.slice(4, 5);

console.log("Slice array : " + slicearray1);
console.log(slarr1);

console.log(" ");
console.log(" ");
// ***if we get operation for arrange sequence sort() method***
console.log("sort() method");

const num1 = [8, 6, 4, 3, 7, 4, 1, 2];
const langauge = ["HTML", "CSS", "JAVA", "BOOTSTRAP", "PYTHON"];

console.log("Sorted number : " + num1.sort());
console.log("Sorted laguage : " + langauge.sort());

console.log(" ");
console.log(" ");

console.log("the minimum number from array:  " + num1);
const result3 = num1.sort();
console.log("is :" + result3[0]);

console.log("the maximum number from array:  " + num1);
const result4 = num1.sort();
console.log("is :" + result4[num1.length - 1]);

console.log(" ");
console.log(" ");
// ***if we get operation using splice() method***
console.log("splice() method");

// +++++++SENTEX : splice() : Array.splice(start, delete , ...element)+++++++

const splarr = ["Monday", "Tuesday", "thursday", "friday"];
console.log(splarr);
const splicearray = splarr.splice(2, 0, "wednesday");
console.log("splice array : " + splarr);
console.log(splarr);

console.log(" ");
console.log(" ");
const splarr1 = [
  "Monday",
  "Tuesday",
  "saturday",
  "sunday",
  "thursday",
  "friday",
];
console.log(splarr1);
const splicearray1 = splarr1.splice(2, 2, "wednesday");
console.log("splice array for remove and add : " + splarr1);
console.log(splarr1);

console.log(" ");
console.log(" ");
const str = splarr1.toLocaleString();
console.log("in string formate : " + str);

console.log(" ");
console.log(" ");
// ***if we get operation using unshift() method***
console.log("unshift() method");

const unshiftarr = [2, 3, 4];
console.log(unshiftarr);

const afterunshiftarr = unshiftarr.unshift(1);
console.log(unshiftarr);

console.log(" ");
console.log(" ");
// ***if we adding anynumber in the begining of the array using unshift() method***
console.log("unshift() method");

const valueArray = splarr.values();
console.log("after adding a iterator : ");

for (value of valueArray) {
  console.log(value);
}

const valueArray1 = splarr.values();

console.log(valueArray1);

console.log(valueArray1.next().value);
console.log(valueArray1.next().value);
console.log(valueArray1.next().value);
console.log(valueArray1.next().value);
console.log(valueArray1.next().value);
console.log(valueArray1.next().value);

