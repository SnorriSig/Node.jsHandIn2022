// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 
console.log(alienMessage.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const me = {
	firstName: "Snorri",
	age:38
}
console.log(me.firstName + " " + me.age);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {
	isAllowed: true
};

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}

delete thisSong.description;
thisSong.about = 'Just a tribute.';

console.log(thisSong);

// remove the property "description" and add a property called "about" that should say "Just a tribute." 


// --------------------------------------


