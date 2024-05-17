const arr1 = [1,3,8,4,5]

console.log("first arr1 :" + arr1);

const max = Math.max.apply(this, arr1)
const min = Math.min.apply(this, arr1)

console.log(max);
console.log(min);


// ++++++++concat two array+++++++++++

const arr2 = [2,3,4]
const arr3 = [5,6,7]

console.log(arr2);
console.log(arr3);

console.log("first arr valu is")

for(value of arr2){
    console.log(value);
}
for(value of arr3){
    console.log(value);
}

arr2.push.apply(arr2 , arr3)

console.log("arr value after conncatenat");

for(value of arr2){
    console.log(value);
}