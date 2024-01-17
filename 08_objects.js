// singleton are only made when objects are used as a constructor like
// Object.create

// ******************************** object literals ********************************

// to insert a symbol into the object
const sym = Symbol("key");

const user = {
  name: "admin",
  age: 22,
  [sym]: "my key",
  email: "admin@example.com",
  isLoggedIn: false,
  location: "srinagar",
  lastLoginDays: ["mondays", "saturday"],
};

console.log(user.name); //regular property
console.log(user[sym]); //symbol property
console.log(typeof user[sym]); // whwtever datatype is and it is a string

// to change any value in object we use . (dot) method
user.name = "sarfaraz";
console.log(user);

// when you want to add a key to the object
user.id = function () {
  console.log("1");
};
user.detail = function () {
  console.log(`hi ${this.name} your email is ${this.email}`);
};
console.log(user.id());
console.log(user.detail());

//  and if we want that our object remain unchanged we use freeze method
Object.freeze(user);

// now if we make any cahnges in the object it does not execute and object remain unchanged
user.name = "umar";
console.log(user);

// note: you will see in output that symbol is specially defined with an Symbol property that is why the correct way of executing symbol is [symbol]: "value" and while priting console.log(object[symbol ])
