// ******************************** For Loop ********************************

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const myArray = ["ironman", "thor", "hulk"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// **************************** break and continue ************************************
// to break a loop
for (let i = 1; i <= 20; i++) {
  if (i == 9) {
    console.log(`${i} is detected`);
    break;
  }
  console.log(i);
}

// to continue a loop
for (let i = 1; i <= 20; i++) {
  if (i == 9) {
    console.log(`${i} is detected`);
    continue;
  }
  console.log(i);
}

// **************************** while loop and do while loop ************************************
let i = 1;
while (i <= 10) {
  console.log(i);
  i += 2;
}

let arr = ["flash", "batman", "thor"];
let index = 0;
while (index < arr.length) {
  console.log(arr[index]);
  index += 1;
}

let score = 10;
let j = 11;
do {
  console.log(j);
  j++;
} while (j <= score);

// ***************************** for-of loop ***********************************

const myarr = [1, 2, 3, 4, 5, 6];
for (const num of myarr) {
  console.log(num);
}

const mystr = "hi how are you";
for (const value of mystr) {
  if (value === " ") {
    continue;
  }
  console.log(value);
}

// ***************************** Map ********************************

// map is a javascript object which holds the keys and values
const map = new Map();
map.set("IN", "INDIA");
map.set("FR", "FRANCE");
map.set("GM", "GERMANY");
map.set("IN", "INDIA"); // it does not execute same values twice

console.log(map);

//  for of loop for map
for (const [key, value] of map) {
  console.log(key, ":-", value);
}

// for of loop for object
const myobj = {
  game1: "NFS",
  game2: "BGMI",
  game3: "COC",
};
//for (const [key, value] of myobj) {
//console.log(key, ":-", value); // it gives error which says not iterable that means for-of loop doesnot work on objects
//}

// ********************************** for-in loop for objects******************************

for (const key in myobj) {
  console.log(`${key} => ${myobj[key]}`);
}

// for-in loop for arrays
const coding = ["js", "jsx", "css", "html"];

for (const key in coding) {
  console.log(key);
  console.log(coding[key]);
}

// for in loop for map
for (const key in map) {
  console.log(key); //can't iterate on map
}

// ******************************** For-Each loop ********************************

const lang = ["js", "jsx", "css", "html", "java", "python", "node"];

lang.forEach((item) => {
  console.log(item);
});

lang.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
