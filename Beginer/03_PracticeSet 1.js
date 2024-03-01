//! Exercise
//todo 1. create a variable of type string and try to add number to it?
// let a = 'hello';
// let b = 5;
// console.log(a + b);

//todo 2. Use typeof operator to find the data type in last question?
// console.log(typeof(a + b));

//todo 3. create a const object in javascript can you change it to hold a number later?
const c = {
  name: "Nitin",
  section: 1,
  isPrinciple: false,
};
// c = 'hello' // we can't do that in const object

//todo 4. try to add a new key to the const object in problem 3 were you able to do it?
c['class'] = 'MCA'
console.log(c);

//todo 5. Write a JS program to create a word-meaning dictionary of 5 words?
const dictionary = {
  retinue: "A retinue is a group of helpers, supporters, or followers.",
  caterwaulplay : "To caterwaul is to make a very loud and unpleasant sound. Caterwaul can also mean “to protest or complain noisily.",
  voracious: "Voracious describes someone who has a huge appetite. It can also be used figuratively to mean 'excessively eager', as in 'a voracious reader'.",
  opprobrium: "Opprobrium refers to very strong disapproval or criticism of a person or thing especially by a large number of people.",
  haggard : "Someone described as haggard appears tired or thin especially as if because of hunger, worry, or pain. Haggard can also describe someone who looks wild or otherwise disheveled.",
  lampoon : "To lampoon someone or something is to ridicule that person or thing, especially through the use of harsh satire.",
};

console.log(dictionary);
console.log(dictionary.opprobrium);
