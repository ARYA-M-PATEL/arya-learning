for (let i = 0; i < 10; i++) {
    console.log(i);;
    
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
    firstname : "Arya",
    lastname : "patel",
    eyecolor : "brown"
}

// ===================for in loop=====================
// +++++++++++++++++++++++++++++++ 
// for in loop only use for object
// +++++++++++++++++++++++++++++++ 

for(value in person){
    console.log(person);
    console.log("<br>")
    console.log(person[value]);
    console.log("<br>")
    console.log(value);
}


// ===================for of loop=====================
// +++++++++++++++++++++++++++++++ 
// for of loop use for object, arrya ,string
// +++++++++++++++++++++++++++++++ 

var alpha = ["A", "B", "C", "D"]

for (let i = 0; i <= alpha.length-1; i++) {
    console.log(alpha);
    console.log(alpha[i]);
}

// ===================for of loop=====================
console.log('<br>')
for(value of alpha){
    console.log(value);
}


const A = "Arya"

for(value of A){
    console.log(value)
}