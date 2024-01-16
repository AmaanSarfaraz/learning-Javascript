// ****************************numbers****************************

const score = 100;
console.log(score);

// by writing this it is definitely a type of number and it has its methods like string
const balance = new Number(500);
console.log(balance);

// to canvert a number in string we use toString to a number
console.log(balance.toString());

// it defines the zeroes after the decimal and in e-commerce website we should write llike this
console.log(balance.toFixed(2));

// to roundoff a number we use roprecision to a number
// we should use it properly so that number doesn't overflow
const round = new Number(243.5567);
console.log(round.toPrecision(3));

// to use commas in between the numbers which is usa standard
const numberOne = 1000000;
console.log(numberOne.toLocaleString());

// ******************************** Maths ********************************

console.log(Math);

// it will convert the negative value to positive value but positive value remains the same
console.log(Math.abs(-5));

// round will give you the roundoff value
console.log(Math.round(4.9));

// it has the two types upper value and lowest value
// for upper value
console.log(Math.ceil(4.9));

// for lower value
console.log(Math.floor(4.9));

// to find a minimum value we use min
console.log(Math.min(10, 7, 5, 4, 3, 2));

// to find a maximum value we use max
console.log(Math.min(10, 7, 5, 4, 3, 2));

// to get a rendowm number we use Math.random()
console.log(Math.random() * 10);

// to make sure that we don't get a value  of zero
console.log(Math.random() * 10 + 1);

// we have a more genuine way of doing this above method
const min = 30;
const max = 49;

let value = Math.floor(Math.random() * (max - min + 1));
console.log(value);

// note math.random lies between 0 and 1 only
