const username = "sarfaraz";
const password = "123";
const userLoggedIn = true;

if (userLoggedIn) {
  console.log("logged in successfully");
} else if (!userLoggedIn) {
  console.log("denied");
} else {
  console.log("login failed");
}

const month = "march";
switch (month) {
  case "january":
    console.log("january");
    break;
  case "feb":
    console.log("feb");
    break;
  case "march":
    console.log("march");
    break;
  default:
    console.log("default value");
    break;
}

// ***************************** truthy and falsy values ***********************************
// when code assumes that the condition is true or false

//falsy value are
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

// some truthy values are
// "0", "false", " ", [], {}, function(){} "empty function is also thuthy value",

// to check empty array
let emptyarray = [];
if (emptyarray.length === 0) {
  console.log("empty array");
}

// to check an empty object
let emptyobject = {};
if (Object.keys(emptyobject).length === 0) {
  console.log("empty object");
}

// ******************************** Nullish Coalescing Operator (??) : null and undefined ********************************
let value;
// value = 10 ?? 20;
// value = null ?? 20;
// value = undefined ?? 20;
value = null ?? 10 ?? 20;
console.log(value);

// ******************************** terniary operator (?) ********************************
//  it is totally different from Nullish Coalescing Operator (??)
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
