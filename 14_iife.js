// immediately invoked function expression
// what is iife
// iife is the function which is executed immediately and to remove the global scope pollution we use iife

// named iife
function chai() {
  console.log("db connected");
}
chai();

// iife way of writing this
(function code() {
  console.log("db connected in iife way");
})();

// unnamed iife and arrow function
((username) => {
  console.log(`db connected in unnamed iife by ${username}`);
})("sarfaraz");
