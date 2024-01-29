// let mySym = Symbol("keys1");

// let myObj = {
//   name: "Tayyab",
//   [mySym]: "keys",
//   "full name": "Tayyab Shahzad",
//   age: 24,
//   email: "tayyab@gmail.com",
// };

// console.log(myObj);
// console.log(myObj["full name"]);

// myObj.greeding = function () {
//   return "Hello User";
// };

// console.log(myObj.greeding);

// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = "123";
tinderUser.username = "tayyab";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "asd@gmail.com",
  fullName: {
    userFullname: {
      firstName: "Tayyab",
      lastName: "Shahzad",
    },
  },
};

// console.log(regularUser.fullName.userFullname.lastName);

obj1 = { 1: "a", 2: "b", 3: "c" };
obj2 = { 4: "a", 5: "b", 6: "c" };
obj3 = { 7: "a", 8: "b", 9: "c" };

allobj = { ...obj1, ...obj2, ...obj3 };
// console.log(allobj);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
