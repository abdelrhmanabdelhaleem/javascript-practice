
// variables
// var, let, const

// let name = "abdo";
// const age = 22;

// data types
// string, number, boolean, undefined, null, object

// console.log(typeof "hello");
// console.log(typeof 10);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);

// operators
// + - * / % **
// == === != !== > < >= <=

// console.log(5 == "5");  // true
// console.log(5 === "5"); // false

// conditions
// let age = 22;

// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Child");
// }

// loops
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// functions
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 10));

// arrow function
// let multiply = (a, b) => a * b;
// console.log(multiply(5, 2));

// default parameters
// function welcome(name = "anonymous") {
//   console.log(`Hello ${name}`);
// }

// scope
// var x = 10;
// let y = 20;

// if (true) {
//   let z = 30;
//   var a = 40;
// }
// console.log(a);
// console.log(z); // Error

// hoisting
// console.log(x); // undefined
// var x = 10;

// console.log(y); // Error
// let y = 20;

// closure
// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// let counter = outer();
// counter();
// counter();
// counter();

// arrays
// let arr = [7, 4, 1, 8, [5, 2]];

// console.log(arr.length);
// console.log(arr.flat());
// console.log(arr.sort((a, b) => a - b));

// map
// console.log([1, 2, 3].map(n => n * 2));

// filter
// console.log([1, 2, 3, 4].filter(n => n > 2));

// reduce
// console.log([1, 2, 3].reduce((sum, n) => sum + n, 0));

// strings
// let str = "JavaScript";

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.includes("Java"));
// console.log(str.slice(0, 4));

// destructuring
// let [a, b] = [10, 20];
// let { name, age } = { name: "abdo", age: 22 };

// spread operator
// let arr1 = [1, 2];
// let arr2 = [...arr1, 3, 4];

// console.log(arr2);

// rest parameters
// function sum(...numbers) {
//   return numbers.reduce((total, n) => total + n, 0);
// }
// console.log(sum(1, 2, 3, 4));

// try catch
// try {
//   throw new Error("Something went wrong");
// } catch (error) {
//   console.log(error.message);
// }

// nested loop
for (let i = 0; i <= 3; i++) {
//   let stars = "";
//   for (let j = 0; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }
