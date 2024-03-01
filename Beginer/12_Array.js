let marks = [45,76,78,45,98,34,56];
// for (mark in marks){
//     console.log(marks[mark]);
// }
// console.log("");
// for (mark of marks){
//     console.log(mark);
// }
// console.log(typeof marks);

//! Methods 
//? toString()
//? join()
// let c = marks.join("_")
// console.log(c); 
// console.log(typeof c); 
//? pop()
// console.log(marks.pop()); //return a last element and delete

//? push()
// console.log(marks.push(7)); //return a array new length and add new element in last
// console.log(marks);
//? shift()
// let c = marks.shift() //Remove first element of the array
// console.log(c);
//? unshift()
// let c = marks.unshift(65) //return a array new length and add new element in first
// console.log(c);
//? delete  //it is the operators not a method
// console.log(marks.length);
// delete marks[7] //it is not affect the array length
// console.log(marks);
// console.log(marks.length);

//? remove()

//? insert()
//? concat()
// let marks2 = [45,68,69,57];
// let marks3 = marks.concat(marks2);
// console.log(marks3);
//? sort()
// marks.sort();
// console.log(marks);
// let names = ["sourav",'shubham','abhilash','ganesh','Nitin'] ;
// names.sort();
// console.log(names);

//? reverse() 
// marks.reverse();
// console.log(marks);

//? splice()
//* marks.splice(start, Number of element, insert value)
// let c = marks.splice(2, 2, 45,56,67);
// console.log(c); // return delete value typeof object
// console.log(marks); // new array can see

//? slice() // create new array
// let c = marks.slice(1,4);
// console.log(c);

//? delete
delete marks[3] //it delete an element but,array length is not change,item will be empty 
delete marks[5] //it delete an element but,array length is not change,item will be empty 
console.log(marks.length);