// function add(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

//console.log(addtwo(2, 3, 4, 5, 2, 1));

// function add(...numbers) {
//   return numbers.reduce((sum, value) => {
//     return typeof value === "number" ? sum + value : sum;
//   }, 0);
// }

// function add(...numbers) {
//   return numbers.reduce((sum, value) => {
//     if (typeof value !== "number") {
//       throw new Error("All arguments must be numbers");
//     }
//     return sum + value;
//   }, 0);
// }

// try {
//   console.log(add(2, 3, 4, "5", 2, 1));
// } catch (error) {
//   console.error(error.message);
// }

// const user = {
//   username: "Tayyab",
//   price: 12341,
// };

// function getDetails(anyObject) {
//   console.log(
//     `My name is ${anyObject.username} and bought it in $${anyObject.price}`
//   );
// }

// getDetails(user);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Scope

// if (true) {
//   let username = "Tayyab";
//   if (username) {
//     console.log(username);
//     let name = "asd";
//   }
//   //   console.log(name);
// }

//console.log(username);

//This keyword

// const detailsObj = {
//   name: "Tayyab Shahzad",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(this.name);
//     console.log(this);
//   },
// };

// detailsObj.welcomeMessage();
// detailsObj.name = "Abdullah";
// detailsObj.welcomeMessage();
// console.log(this);

// function print() {
//   console.log(this);
// }
// print();

// const print = function () {
//   console.log(this);
// };

// const print = () => {
//   console.log(this);
// };
// print();

// const user = {
//   username: "Tayyab",
//   price: 12341,
// };

// const print = (anyObject) => ({
//   name: anyObject.username,
//   price: anyObject.price,
// });

// console.log(print(user));

//IIFE

// (chai = function () {
//   console.log("Tayyab");
// })();

((name) => console.log(name))("Tayyab");
