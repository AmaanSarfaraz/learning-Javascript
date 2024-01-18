let a = 300; // this is global scope which is available everywhere
if (true) {
  let a = 30; // this is block scope which is not available outside the curly braces
  const b = 40;
  console.log("inner ", a);
}
console.log("outer", a);

// scopes in nested functions

function one() {
  const username = "sarfaraz";
  function two() {
    const password = "sar123";
    console.log(username);
  }
  //console.log(password);  // it will give error while executing this code because it it used outside the scope which is curl braces of function two
  two();
}
one();

//  scopes in nested if else
if (true) {
  const firstname = "jhon";
  if (firstname) {
    const lastname = " doe";
    console.log(firstname + lastname);
  }
  //   console.log(lastname);   //it will give error while executing this code because it it used outside the scope
}
// console.log(firstname);   //it will give error while executing this code because it it used outside the scope

// ****************************** basic hoisting **********************************
// hoisting is executing function before declaring

console.log(addone(5)); // this is hoisting and it will be executed successfully because the function is declared using the function keyword and does not assigned to a variable

function addone(num) {
  return num + 1;
}
// console.log(addone(5));

//  now if store the function in a variable
//console.log(addtwo(8));  // it will give error becoz function is not declared by using the function keyword and is assigned to a variable

const addtwo = function (num) {
  return num + 2;
};
// console.log(addtwo(8));

// Function declaration
productFunction(2, 2);
function multiply(a, b) {
  return a * b;
}

// Assigning the function to a variable
let productFunction = multiply;
