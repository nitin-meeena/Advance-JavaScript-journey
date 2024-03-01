//! Exercise
//todo 1. Use operators to find whether the age of a person lies between 10 or 20 ?
// let age = 24;
// if(age >= 10 && age <= 20){
//   console.log('the age is lies in 10 and 20');
// } else{
//   console.log('the age is not lies in 10 and 20');
// }

//todo 2. Demonstrate the use of switch case statement in JS ?
// let age = 13;
// switch(age){
//   case (age>= 10 && age <= 20):
//     console.log('the age is lies in 10 and 20');
//     break;

//   default: console.log('the age is not lies in 10 and 20');
// }

//todo 3. Write a JS program to find whether a number is divisible by 2 and 3 ?
let num = 24;
if((num % 2 == 0) && (num % 3 == 0)){
  console.log('The Number is divisible by 2 and 3');
} else{
  console.log('The Number is not divisible by 2 and 3');
}

//todo 4. Write a JS program to find whether a number is divisible by either 2 or 3 ?

if((num % 2 == 0) || (num % 3 == 0)){
  console.log('The Number is divisible by 2 and 3');
} else{
  console.log('The Number is not divisible by 2 or 3');
}

//todo 5. Print "you can Drive" or "You can not Drive" based on age being greater than 18 using ternary operator ?
let age = 19;
let result = age >= 18 ? "you can Drive" : "You can not Drive";
console.log(result);