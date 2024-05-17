var x = true;
var y = false;

// ***special operater  1.condition ***

var z = x ? 2 : 4;
var z1 = y ? 2 : 4;
console.log("value of z : " + z);
console.log("value of z : " + z1);


person = {
    firstname : "Arya",
    lastname : "patel",
    eyecolor : "brown"
}

// ****DELETE any value in object  use delete operater****

delete person.lastname;
console.log("deleted lastname " + person.lastname);


// ***special operater  1.in operater ***

var z2 = 'eyecolor' in person ? true : false;
var z3 = 'lastname' in person ? true : false;
console.log("value of z : " + z2);
console.log("value of z : " + z3);

// ***special operater  1.instanceof operater ***

console.log("if person is a instance of Array object: "  +(person instanceof Array));
console.log("if person is a instance of object object: "  +(person instanceof Object));
