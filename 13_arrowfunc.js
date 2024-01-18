const user = {
  username: "sarfaraz",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} welcome to the website`);
    console.log(this); //this keyword give us excess to the objects in trhe scope and it will provide the context of the object
  },
};
user.welcomeMessage();
console.log(this);

// this will key give context of only objects not the functions
function chai() {
  let admin = "sarfaraz";
  console.log(this.admin); //it will return a undefined value which means it doesnot give the context of function
  console.log(this);
}
chai();

const code = () => {
  let password = "123";
  console.log(this.password); //here it will return the same value undefind as above function
  console.log(this);
};

code();

//  another way of using arrow functions

// const add = (num1, num2)=>num1 + num2
const add = (num1, num2) => num1 + num2; //if we write it like this it will assume return automatically but if we write the curly braces return is must
console.log(add(1, 2));

// to use object in arrow functions you have to wrap the object in braces
const objad = (num1, num2) => ({ username: "admin" });
