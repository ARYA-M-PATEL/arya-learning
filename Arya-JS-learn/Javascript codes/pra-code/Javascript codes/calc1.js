for (let i = 1; i < 10; i++) {
    console.log(`number: ${i}`);
    for (let j = 1; j < 10; j++) {
        console.log(i + '*' + j + ' = ' + i*j);
    }
    
}

let index = 3

 while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

let score = 1 

// do {
//
// } while ();

do {
    console.log(`values is ${score}`);
    score++
} while (score <= 10);


const coding = ["js", "java", "python", "css"]

coding.forEach((item) => {
    console.log(item);
})


const values = coding.forEach((item) => {
    console.log(item);
})
console.log(values);

/* 
some other loops in JS is 
for of 
forEach 
*/


const myNumbers = [1, 2, 3, 4, 5 , 6 ,7, 8, 9, 10]

const newNums = myNumbers.map((num) => { return num + 20 })   
console.log(newNums);



abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz
abcdefghijklmn