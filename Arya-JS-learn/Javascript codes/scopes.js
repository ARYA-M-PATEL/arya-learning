function one() {
  const username = "Arya";

  function two() {
    const abc = "abcd";
    console.log(username);
  }
  two();
}
one();

class car {
  constructor(name) {
    this.name = name;
  }

  printName = () => {
    console.log(this.name);
  };
}

const bmw = new car("bmw-1025");
const oooo = new car("oooo-1025");

bmw.printName();
oooo.printName();

// this -> normal funtion
//      -> arrow

function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis());
