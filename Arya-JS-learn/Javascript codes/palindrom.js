const isPalindrom1 = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  if (str === reverse) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrom1("level"));

console.log(" ");
console.log("second method"); 

const isPalindrom2 = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return str === reverse ? true : false;
};
console.log(isPalindrom2("level"));
