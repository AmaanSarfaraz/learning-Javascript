//  Destructuring of objects
const course = {
  coursename: "learning js",
  price: "usd 100",
  courseinstructor: "chai with code",
};

console.log(course.courseinstructor);

// but the more easy way of getting values from the object
// first make a variable and then pass the key you want to extract and  then pass the object name where from you want to extract
// note if you want to change the name of the key you can change it here
// const {courseinstructor} = course
// here ":" means as eg. courseinstructor as instructor
const { courseinstructor: instructor } = course;
// now you have to log the new value
console.log(instructor);
