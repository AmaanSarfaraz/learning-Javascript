let myArray = [1, 2, 3, 4, 5, 6, 7];

const array = new Array(1, 2, 3, 4, "hello", 7);

// array methods

// to push a value in an aray we use .push()
myArray.push(9);

// to remove a value from an array we use .pop()
myArray.pop();

// to insert a value in start of array we use .unshift()
myArray.unshift(0);

// to remove the added value using .unshift() we use .shift()
myArray.shift();

// to check if the value is in the array or not we use .includes()
console.log(myArray.includes(5));

// to check the index of the value we use .indexOf() and if the value is not in the array it returns -1
console.log(myArray.indexOf(5));

console.log(myArray);

// .join changes the type of the array to string and also binds the value
let newArr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(newArr.join());

// ********************************slice and splice ********************************

// the difference between splice and splice is that slice doesn't manupulate the original array but splice does and slice doesn't include range but splice does
let spArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("A ", spArray);

const myArr1 = spArray.slice(1, 4);
console.log(myArr1);
console.log("B ", spArray);

const myArr2 = spArray.splice(1, 4);
console.log(myArr2);
console.log("C ", spArray);

//  now more about push
let marvel_heros = ["ironman", "thor", "spiderman"];
let dc_heros = ["flash", "batman", "spiderman"];
// marvel_heros.push(dc_heros);
//  by using push method it will give us array in an array as an element in first array
// console.log(marvel_heros);

// now if we use concat method it will give us a new array but there is a problem using this is that we can use only one value
const allheros = marvel_heros.concat(dc_heros);
console.log(allheros);

// another and more precise way to concat arrays is to use spread opertor method "..." and we can concat multiple arrays together

const newallheros = [...marvel_heros, ...dc_heros];
console.log(newallheros);

//  if we have such an array where arrays are present in a single array

const messedArray = [1, 2, 3, 4, [5, 6, 7], 8, [9, 0, 3, [4, 5, 6, 7]]];

// so in this situation just use flat method
const resolvedArray = messedArray.flat(Infinity);
console.log(resolvedArray);

// to check that it is array or not we use isArray
console.log(Array.isArray("sarfaraz"));

// to convert anything in array we have different methods
console.log(Array.from("sarfaraz"));

// now an interesting question for interview
console.log(Array.from({ name: "sarfaraz" })); //it will return a empty string so we have to tell that key or value have to convert to array

// now second method using of to convert anything in array
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
