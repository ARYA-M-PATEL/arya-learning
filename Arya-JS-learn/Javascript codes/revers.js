const isStraight = (str) => {
  let straight = "";
  for (let char = 0; char <= str.length - 1; char++) {
    console.log(str[char]);
  }
};
isStraight("Arya Patel");

// console.log(" ");
// console.log(" ");
const isStraight1 = (str) => {
  let straight = "";
  for (let char = 0; char <= str.length - 1; char++) {
    console.log(str[char]);
  }
};
isStraight1("Arya Patel");
// console.log(" ");
// console.log(" ");

const isReverse = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
    console.log(str[i]);
  }
  return reverse;
};
// console.log(isReverse("arya patel"));
isReverse("arya patel");

console.log("second method");
const isReverse1 = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
    // console.log(str[i]);
  }
  return reverse;
};
console.log(isReverse1("arya patel"));
