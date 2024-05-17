



const user = {
    username: "Arya",
    price: 60,

    welcomeMessge: function () {
        console.log(`${this.username} , welcome`);
        console.log(this);
    }
}

user.welcomeMessge()
user.username = "Patel"
user.welcomeMessge()

console.log(this)

function abc() {
    console.log(this);
}
abc();

    (function abc() {
        console.log("Arya Patel")
    })();

    ((name) => {
        console.log(`Patel Arya`);
    })('Arya')