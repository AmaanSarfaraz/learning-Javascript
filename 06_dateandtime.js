//  Dates

let date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toJSON());

console.log(typeof date);

//  we can crete our date also in javascript and the months start from 0
// if you want to disply january month write 0 index

let myCreatedDate = new Date(2002, 9, 23);
console.log(myCreatedDate.toDateString());

let myCreatedDateandTime = new Date(2002, 9, 23, 6, 10);
console.log(myCreatedDateandTime.toLocaleString());

// in mm/dd/yyyy format
let sequencedDate = new Date("10,23,2002");
console.log(sequencedDate.toLocaleString());

// time stamp
// it gives us time in miliseconds since
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(sequencedDate.getTime());
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getMinutes());

// some more about toLocaleString
newDate.toLocaleString("default", {
  weekday: "long",
  day: "short",
});
