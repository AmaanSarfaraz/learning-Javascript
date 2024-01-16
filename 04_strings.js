const name = "sarfaraz";
const age = 22;

// Always use backtics insted of concactinate with +
console.log(`hii my name is ${name} and age is ${age}`);

const youtubName = new String("hello world");
console.log(youtubName);

console.log(youtubName.length);

// it will convert the name to upperCase but original remains same as we remember from the previous lecture that primitive value stores in stack and it gives only copy of that code and the value of copy changes not the original
console.log(youtubName.toUpperCase());

// to know  on specific index which character is positioned we use charat
console.log(youtubName.charAt(3));

// to know the index of the specific character we use indexOf
console.log(youtubName.indexOf("l"));

// it gives you a slice of the string but remember the end number doesnot include itself
// we can't give negative value to substring
const newString = youtubName.substring(0, 5);
console.log(newString);

// in slice method we can give negative values as well
const newStringTwo = youtubName.slice(-8, 5);
console.log(newStringTwo);

// trim method removes the unwanted spaces and it has two types trim end and trim start
const newStringThree = "     hello    ";
console.log(newStringThree);
console.log(newStringThree.trim());

// replace method can replace anything in the string
const url = "http://helloworld%20.com";
console.log(url.replace("%20", "%100"));

// by includes method youy can search a particular part is present in the string or not
console.log(url.includes("%20"));
console.log(url.includes("%100"));
// note index starts from 0
