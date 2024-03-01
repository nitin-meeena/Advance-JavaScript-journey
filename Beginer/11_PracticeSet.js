//* what will the following print in JavaScript ! console.log("har\"".length);
console.log("har\"".length);

//* Explore the includes, startsWith, endsWith Function of a String?
let greet = "Good Morning EveryOne";
console.log(greet.includes("Mor"));
console.log(greet.startsWith("G"));
console.log(greet.endsWith("e"));

//* Write a program to convert a given string to lowercase? 
console.log(greet.toLowerCase());

//* extract the amount out of this string "Please Gives Rs 1000" ?
let str = "Please Gives Rs 1000";
let amount = Number.parseInt(str.slice("Please Gives Rs".length ))
console.log(amount);
//* Try to change 4th character of a given string were you able to do it?
//? we can't change 4th character of a string directly.
