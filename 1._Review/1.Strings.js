// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
console.log(parseFloat(numberOne) + parseFloat(numberTwo));

// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const twoDecimalsInt = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(twoDecimalsInt.toFixed(2));

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const nums = [];
nums.push(one,two,three);

const calcAverage = async (nums) => {
   
    let numSum = 0;
    nums.forEach(async element => {
        numSum += parseFloat(element);
    });

    const delay = async () => await waitFor(50)();

    const averageNum = numSum/nums.length;
    return averageNum;
} 

console.log(calcAverage(nums));

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log(letters.charAt(letters.length-1));

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const newFact = fact.replace("j", "J")
console.log(newFact);

// --------------------------------------



