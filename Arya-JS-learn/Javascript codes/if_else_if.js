const first = 10;

console.log(first);

// ++++++++++++++++++++++++++++++++if condition++++++++++++++++++++++++++++++++++
// ======================  1  =======================
if (first) {
    console.log("true")
}

// ======================  2  =======================

if (first == 10) {
    console.log("true")
}

// ++++++++++++++++++++++++++++++++if else condition ++++++++++++++++++++++++++++++++++
// ======================  1  =======================

if (first < 20) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// ======================  2  =======================
if (first > 20) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


// ++++++++++++++++++++++++++++++++if else_if else condition ++++++++++++++++++++++++++++++++++
// ======================  1  =======================
const marks = 50;

if (marks < 40) {
    console.log("you are fail");
}
else if (marks == 50) {
    console.log("you are PASS"); 
}
else if (marks > 50) {
    console.log("you are gate first no."); 
}
else{
    console.log("please enter valid input");
}

// ======================  2  =======================

const marks1 = 30;

if (marks1 < 40) {
    console.log("you are fail");
}
else if (marks1 == 50) {
    console.log("you are PASS"); 
}
else if (marks1 > 50) {
    console.log("you are gate first no."); 
}
else{
    console.log("please enter valid input");
}


// ======================  3  =======================

const marks3 = 70;

if (marks3 < 40) {
    console.log("you are fail");
}
else if (marks3 == 50) {
    console.log("you are PASS"); 
}
else if (marks3 > 50) {
    console.log("you are gate first no."); 
}
else{
    console.log("please enter valid input");
}


// +++++++++++++nested if++++++++++++++
const Marks = 20;

if (Marks > 40) {
    console.log("number is greater than")

    if(Marks > 30){
    console.log("number is greater than 30" )

    }
    
}
else{
    console.log("number is less than" )
    
}