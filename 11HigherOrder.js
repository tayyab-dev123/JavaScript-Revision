// Creating an array of user objects
let users = [
  {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    isActive: true,
  },
  {
    name: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    isActive: false,
  },
  {
    name: "Bob Johnson",
    age: 28,
    email: "bob.johnson@example.com",
    isActive: true,
  },
];

//forof

// for (const user of users) {
//   console.log(`User Name: ${user.name}`);
// }

//Map

let countryMap = new Map();

// Adding entries to the Map
countryMap.set("USA", "United States of America");
countryMap.set("CAN", "Canada");
countryMap.set("GBR", "United Kingdom");
countryMap.set("AUS", "Australia");

// for (const [key, value] of countryMap) {
//   console.log(key, " ", value);
// }

// const userObj = {
//     name: "John Doe",
//     age: 25,
//     email: "john.doe@example.com",
//     isActive: true,
//   };

// for (const [key, value] of userObj) {
//   console.log(key, " ", value);
// } won't work

//for in

// const userObj = {
//   name: "John Doe",
//   age: 25,
//   email: "john.doe@example.com",
//   isActive: true,
// };

// for (const key in userObj) {
//   console.log(`${key} corresponding value is ${userObj[key]}`);
// }

//foreach

let codingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Swift",
  "HTML",
  "CSS",
  "PHP",
];

// const values = codingLanguages.forEach((item) => {
//   //console.log(item);
//   return item; // foreach loop can't return
// });
// console.log(values);

// users.forEach((item, index, array) =>
//   console.log(item.name, " ", index, " ", array)
// );

// let numbersArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// let numbersArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 11];

// const multipleoffive = numbersArray.filter((item) => item % 5 === 0);
// console.log(multipleoffive);

// const multiplyByFive = numbersArray.map((item) => item * 5);
// console.log(multiplyByFive);

let booksArray = [
  {
    name: "The Catcher in the Rye",
    genre: "Fiction",
    publishYear: 1951,
    editionYear: 1,
  },
  {
    name: "To Kill a Mockingbird",
    genre: "Classic",
    publishYear: 1960,
    editionYear: 2,
  },
  { name: "1984", genre: "Dystopian", publishYear: 1949, editionYear: 1 },
  {
    name: "The Great Gatsby",
    genre: "Fiction",
    publishYear: 1925,
    editionYear: 3,
  },
  { name: "The Hobbit", genre: "Fantasy", publishYear: 1937, editionYear: 2 },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publishYear: 1997,
    editionYear: 1,
  },

  {
    name: "The Alchemist",
    genre: "Fiction",
    publishYear: 1988,
    editionYear: 5,
  },
  {
    name: "Brave New World",
    genre: "Dystopian",
    publishYear: 1932,
    editionYear: 2,
  },
  {
    name: "The Lord of the Rings",
    genre: "Fantasy",
    publishYear: 1954,
    editionYear: 3,
  },
  {
    name: "Pride and Prejudice",
    genre: "Classic",
    publishYear: 1813,
    editionYear: 4,
  },
  {
    name: "The Chronicles of Narnia",
    genre: "Fantasy",
    publishYear: 1950,
    editionYear: 1,
  },
];

// let myFavBook = booksArray.filter(
//   (bk) => bk.publishYear >= 1950 && bk.genre === "Fiction"
// );
// console.log(myFavBook);

//Chaining
let numbersArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// let myNum = numbersArray
//   .map((num) => num * 10)
//   .map((num) => num + 10)
//   .filter((num) => num > 170);

// console.log(myNum);

//Reduce

// let myTotal = numbersArray.reduce(function (acc, carval) {
//   console.log(`${acc} ______ ${carval}`);
//   return acc + carval;
// }, 0);
// console.log(myTotal);

let shoppingCart = [
  { itemName: "Laptop", price: 999.99, quantity: 2 },
  { itemName: "Smartphone", price: 599.99, quantity: 1 },
  { itemName: "Headphones", price: 79.99, quantity: 3 },
  { itemName: "Wireless Mouse", price: 29.99, quantity: 2 },
  { itemName: "Backpack", price: 49.99, quantity: 1 },
  // ... Add more items with similar properties
  { itemName: "Coffee Maker", price: 89.99, quantity: 1 },
  { itemName: "Fitness Tracker", price: 129.99, quantity: 2 },
  { itemName: "Smart TV", price: 799.99, quantity: 1 },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);

const arrayofEvenAndOdd = [
  1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20,
];

const evenArray = arrayofEvenAndOdd.filter((item) => item % 2 === 0);
console.log(evenArray);
const oddArray = arrayofEvenAndOdd.filter((item) => item % 2 !== 0);
console.log(oddArray);
