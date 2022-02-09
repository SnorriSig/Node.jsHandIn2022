// hoisting
// greetings();

function greetings() {
    console.log("Hello World")
}

const greetingsInAVariable = function greetings() {
    console.log("Hello World in a variable");
}

function doingSomething(anyFunctionReference, name, action) {
    return anyFunctionReference(name,action);
}

const running = name => console.log(`${name} is running`);

const runDrinking = (drink, action ) => console.log(`having ${drink} and ${action}`);

doingSomething(runDrinking,"cola","running");

// implement using doingSomthing
// drinking and another action

