// const coding = ["js", "css", "html", "py", "c", "c++", "node"];

// const value = coding.forEach((item) => {
//   console.log(item);
//   return item;  //forEach odes not return anything
// });
// console.log(value);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.filter((item) => {
  return item > 4; // if the scope is used then the return is must
});
console.log(newNum);

const newValue = [];
myNum.forEach((item) => {
  if (item > 4) {
    newValue.push(item);
  }
});
console.log(newValue);

const num = myNum.map((item) => {
  return item + 10;
});
console.log(num);

// map in chaining
const chainmap = myNum
  .map((item) => item * 10)
  .map((item) => item + 3)
  .filter((item) => item > 50);
console.log(chainmap);

// ******************************** reducer ********************************
const reducer = [1, 2, 3, 4, 5];
const myreducer = reducer.reduce((acc, cur) => {
  console.log(`acc: ${acc} and cur: ${cur}`);
  return acc + cur;
}, 0);
console.log(myreducer);

const shoppingCart = [
  {
    itemName: "shirt",
    price: 500,
  },
  {
    itemName: "pant",
    price: 1200,
  },
  {
    itemName: "trouser",
    price: 800,
  },
  {
    itemName: "sweater",
    price: 1100,
  },
  {
    itemName: "jacket",
    price: 1500,
  },
];
const totalCartBill = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(totalCartBill);
