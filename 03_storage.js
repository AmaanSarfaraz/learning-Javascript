//  in stack memory it cahnges only the copy of the original and original remains unchanged
// in stack memory copy is giving to the other variable
let myYoutube = "amaansarfaraz";
let anotherName = myYoutube;
anotherName = "amaanYT";
console.log(anotherName);
console.log(myYoutube);

// in heap memory the refrence is giving to the other variable and if we change the value of the variable it changes the original also because it takes refrence from direct heap memory
let userOne = {
  username: "sarfaraz",
  id: 1234,
  password: "sarafarz@123",
};

let userTwo = {
  username: "umar",
  id: 5678,
  password: "umar@123",
};

let userThree = userOne;
userThree.username = "amaan";

// on changing userThree.username userOne.username also changes
console.log(userThree.username);
console.log(userOne, userTwo);

// note: primmitives store in stack memory and non-primitive stores in heap memory
