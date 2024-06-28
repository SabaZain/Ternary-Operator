// Ternary Operator - It is a shorthand way to write an if-else statement in a single line.
// It has the following Syntax
// condition ? expressionIfTrue : expressionIfFalse;

// Example 1: If else condition
let userName = "Saba Zain";
if(userName == "Saba Ali"){
    console.log(`Hello ${userName}, Welcome to Governor House.`)
} else {
    console.log("Sorry! User name not found");
}
// Same result with Ternary Operator 
let result = userName == "Saba Zain"
? console.log(`Hello ${userName}, Welcome to Governor House.`)   // "?" represents if condition
: console.log("Sorry! User name not found"); // ":" represents else condition

// Example 2
let age = 17
let allowToVote = (age >= 18)
? console.log("Eligible for voting")
: console.log("Under Age");

// Example 3
let usersName = "Alina";
let userId = 1345;
let loggedInName = usersName == "Alina"
let loggedInId = userId == 4578;
loggedInName && loggedInId
? console.log(`Welcome ${usersName}! with Id: ${userId} , you are logged in successfully.`)
: console.log("Please try again with correct user name and Id.");
