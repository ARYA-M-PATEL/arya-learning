// const name = "Arya"
// const age = 21

// console.log(name);
// console.log(age)

// console.log(name + age);
// console.log(`hELLO My Name is "${name}" My age is "${age}"`)

const name = new String("Arya Patel");
const newString = name.substring(0, 4);
const newString1 = name.slice(-8, 6);
const name1 = "   Arya     ";

console.log(name.length);
console.log(name[0], name[2]);
console.log(name.toUpperCase());
console.log(name.charAt(7));
console.log(name.indexOf("t"));
console.log(newString);
console.log(newString1);
console.log(name1);
console.log(name1.trim());
console.log(name.split(" "));
// trim, split, charAt, indexOf, toUpperCase

var str = new String(" i am Fine");
// document.writeln(str);
console.log(" ");
console.log(" ");
// **********string concatnat***********
const str1 = "Hello ";
const str2 = "How are you ?";
const str3 = "...";

// document.writeln("concatnated string :" + str1.concat(str2));
console.log("concatnated string :" + str1.concat(str2));
console.log("concatnated string :" + str1.concat(str2, str3));
console.log(" ");
console.log(" ");

// ************Replace*********
console.log("without reaplce  word : " + str2);
console.log(
  "reaplce one word to other word : " + str2.replace("you", "you Brothers")
);

console.log(" ");
const str4 = "this is a HTML, HTML is a must learn";
console.log("reaplce one word to other word : " + str4.replace("HTML", "CSS"));

console.log("reaplce all word to other word : " + str4.replace(/HTML/g, "CSS"));
// note:::: g for global