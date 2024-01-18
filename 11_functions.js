function add(num1, num2) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    console.log(num1 + num2);
  } else {
    console.log("not a number");
  }
}
add(1, "q");

// function add(num1, num2) these are paramaters and add(1, 2) these are arguments

function sub(num1, num2) {
  //   let result = num1 - num2;
  //   return result;
  return num1 - num2;
  console.log("hello"); // this code is unrechable because anything after the return doesnot execute in the function
}
const result = sub(5, 2);
console.log("Result", result);

function loginUSerMessage(username) {
  if (username) {
    return `${username} just logged in`;
  } else {
    return `enter a valid username`;
  }
}
console.log(loginUSerMessage());

// ******************************* functions with arrays and objects *********************************

function getnumber(...num1) {
  //...num1 it is known as rest operator and it returns the values in an array
  return num1;
}
console.log(getnumber(10, 11, 122, 34));

// function with object
const user = {
  name: "sarfaraz",
  age: 22,
  password: "123",
};

function userDetail(getDetail) {
  return getDetail.name;
}
console.log(userDetail(user));

// function with array
const numbers = [10, 20, 30, 40, 50, 60];
function getNumbers(getsecondnumber) {
  return getsecondnumber[1];
}
console.log(getNumbers(numbers));
