//* Create an array of numbers and take input from the user to add number to this array?

let a = [12, 23, 45, 40, 60, 67, 20];
// a.push(parseInt(prompt('enter new Element')));
// console.log(a);

//* keep adding numbers to the array in 1 until 0 is added to the array?
// let a = [12, 23,45,40,60,67,20];
// let c;
// do{
//     c = Number.parseInt(prompt('enter new Element'));
//     a.push(c);
// }while(c!=0);
// console.log(a);
//
//* filter for numbers divisible by 10 from a given array?
// let c = a.filter((elem)=>{
//     return elem %10 == 0;
// })
// console.log(c);
//* Create an array of square of numbers?
// let d = a.map((elem)=>{
//     return elem * elem ;
// })
// console.log(d);
//* Use reduce to calculate factorial an array of first n natural number(n being the number whose factorial needs to be calculated)?

let d = a.reduce((elem1, elem2) => {
  return elem1 * elem2;
});
console.log(d);
