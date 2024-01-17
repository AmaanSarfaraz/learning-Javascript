//  nested objects
const user = {
  fullame: {
    userfullname: {
      firstName: "John",
      lastName: "doe",
    },
  },
};
console.log(user.fullame);
console.log(user.fullame.userfullname);
console.log(user.fullame.userfullname.firstName);

// to merge or combine multiple objects
const target = {
  name: "John",
  email: "john@example.",
  phone: 12345678,
};
const source = {
  class: "doe",
  gmail: "doe@example.",
  tel: 87654321,
};

// this is not the right way to combine multiple objects
const obj3 = { target, source };
console.log(obj3);

// the right way to merge or combine multiple objects
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

console.log(target);
console.log(target === returnedTarget);

// so to overcome this problem we use an empty object is used before assigning the objects
// this empty object acted as a target object
const returnedTargetResolved = Object.assign({}, target, source);
console.log(returnedTargetResolved);
console.log(target === returnedTargetResolved);
console.log(target);

// the way we use most of the time to combine multiple objects is using spread operator
const obj4 = { ...target, ...source };
console.log(obj4);

// the format of objects we get from datebase
const employes = [
  {
    id: 1,
    name: "abc",
    salary: 10000,
  },
  {
    id: 2,
    name: "def",
    salary: 15000,
  },
  {
    id: 3,
    name: "ghi",
    salary: 20000,
  },
];
// let x = employes.map((item) => {
//   console.log(employes);
// });

//  to get value from the object
console.log(employes[1].id);

// now to get the keys of an object
console.log(Object.keys(target));

// to get the values of an object
console.log(Object.values(target));

// one more thing which is used oftenly
// it gives us key value in array format
console.log(Object.entries(target));

// to check the value is present in the object or not
console.log(target.hasOwnProperty("name"));
