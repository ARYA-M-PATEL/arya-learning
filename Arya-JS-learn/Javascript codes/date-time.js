let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())

let myCreatedDate = new Date(2023 , 0 ,23)
let myCreatedDate1 = new Date(2023, 7, 23)
let myCreatedDate2 = new Date(2023, 7, 23 , 5 ,3)
let myCreatedDate3 = new Date("2023-12-02")

console.log(myCreatedDate)
console.log(myCreatedDate.toString())
console.log(myCreatedDate1.toString())
console.log(myCreatedDate2.toLocaleString())
console.log(myCreatedDate3.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate.getTime())