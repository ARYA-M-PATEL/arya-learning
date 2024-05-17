// simple method======

function myname() {
    console.log("A")
    console.log("r")
    console.log("y")
    console.log("a")
}
myname()

// second method======
function addtwonumber(number1, number2) {
    console.log(number1 + number2);
}
addtwonumber(5, 3)

// other method=========
function addtwonumber3(number1, number2) {
    let result = number1 + number2
    return result
}

const result = addtwonumber3(5, 3)
console.log("Result", result);

// other method=======
function loginUserMessage(username) {
    return `${username} just logged in`
}
console.log(loginUserMessage("Arya"));
console.log(loginUserMessage("")); 
console.log(loginUserMessage());

// other method like Required===
function loginUserMessage(username) {

    if (username === undefined) {
        console.log("Please enter a username")
        return
    }

    return `${username} just logged in`
}
// ==uper nu and nichenu SAME===
function loginUserMessage(username) {

    if (!username) {
        console.log("Please enter a username")
        return
    }

    return `${username} just logged in`
}


// other method==========

function calcprice(num1) {
    return num1
}

console.log(calcprice(100, 200, 300))

// ====================
function calcprice1(...num1) {
    return num1
}

console.log(calcprice1(100, 200, 300, 400, 500))

// ====================
function calcprice2(val1, val2, ...num1) {
    return num1
}

console.log(calcprice2(100, 200, 300, 400, 500))

// =================================other

const user = {
    username: "Arya",
    price: 200,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} Price is ${anyobject.price}`)
}
handleObject(user)
handleObject({
    username: "Patel" ,
    price: 300 ,
})                  

// ====other=====
const mynewArr = [200, 300, 400, 500, 600]

function returnThirdValue(getArray) {
    return getArray[3]
}

console.log(returnThirdValue(mynewArr)) 

function arrowSum(a, b) {
    return a + b
}

const sum = arrowSum(25, 25)
console.log(sum)

function sayMyName(name) {
   console.log(`My name is ${name}`)
}

sayMyName('Arya')
sayMyName('Arya Patel')



// ================== one function call by other function ===============

function firstFunction() {
    console.log("This is the first function.");
    console.log("This is the first fun.");
}

function secondFunction() {
    console.log("This is the second function.");
    
    // Call the first function
    firstFunction();
}

// Call the second function
secondFunction();


function f1(){
    // console.log("functio2 :" + f2(x = 2))

    f2();
    // const x=5;
        // var ppp = power(x);
        // console.log(ppp) 
}

function f2(x = 2){
    var p = x*x;
    console.log("power value :" + p)
    // return ;
}

f1()

function f3(){
    console.log("function 3 : ");
    f1()
    f2()
}
f3()