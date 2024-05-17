// singleton
// Object.create

// object literals
 const JsUser = {
    name : "Arya",
    age : 20,
    location : "ahmedabad",
    email : "abc123@gmail.com" 
}

console.log(JsUser.email, JsUser.name)
console.log(JsUser["email"])


const tinderUser = {}

tinderUser.id = "12233abc"
tinderUser.name = "abcd"
tinderUser.isLoggedin = false

console.log(tinderUser)     

const regularUser = {
    email: "some@.com",
    fullname1: {
        userfullname: {
            firstname: "Arya",
            lastname: "Patel",
        }
    }
}

console.log(regularUser.fullname1)
console.log(regularUser.fullname1.userfullname)
console.log(regularUser.fullname1.userfullname.firstname)
console.log(regularUser.fullname1.userfullname.lastname)

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d" }

// first method=========
const obj3 = Object.assign({}, obj1, obj2)  //{} this brekets is flow of doqumentation
console.log(obj3)

// second method========
const obj4 ={...obj1, ...obj2}
console.log(obj4)