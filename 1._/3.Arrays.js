// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console
console.log(letters[1]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

const getBoolean = () => {
  return Math.random() < 0.5;
};

function Person(name, age, goodPerson, lazy) {
  this.name = name;
  this.age = age;
  this.goodPerson = goodPerson;
  this.lazy = lazy;
  this.isGoodFriend = () => {
    return this.goodPerson && this.lazy;
  };
}

const friend1 = new Person("Bill", 40, getBoolean(), getBoolean());
friends.push(friend1);
console.log(friends[0].name + " good friend?: " + friends[0].isGoodFriend());

const friend2 = new Person("Bob", 22, getBoolean(), getBoolean());
friends.push(friend2);
console.log(friends[1].name + " good friend?: " + friends[1].isGoodFriend());

const friend3 = new Person("John", 35, getBoolean(), getBoolean());
friends.push(friend3);
console.log(friends[2].name + " good friend?: " + friends[2].isGoodFriend());

// What a lonely array. Add at least 3 friend objects to it.

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value.

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value).

const findNumer1729 = significantMathNumbers.indexOf(1729);
console.log("1729 located in index: " + findNumer1729);

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket
function insert(arr, index, ...items) {
  const subarray = arr.slice.call(items);
  arr.splice.apply(arr, [index, 0].concat(subarray));
}

insert(diet, 2, "hamburger", "soda", "pizza");
console.log(diet);

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already.
const index = diet.length - 1;
diet.splice(index, 1);
console.log(diet);

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.

const dinnerTray = [...diet];
console.log("dinnerTray array: " + dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

let lettersToPrint = [];
lettersExpanded.forEach(findOddIndex);

function findOddIndex(value, index, array) {
  if (index % 2 == 1) lettersToPrint.push(value );
}
console.log(lettersToPrint);

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

console.log("Number is above 6 or below 0");
const discardedNumbers = [];
for (let i = 0; i < numbers.length - 1; i++) {
  if (numbers[i] > 6 || numbers[i] < 0) {
    console.log(numbers[i]);
  } else {
    discardedNumbers.push(numbers[i]);
  }
}
console.log(`\ndiscarded numbers: ${discardedNumbers}`);

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------
