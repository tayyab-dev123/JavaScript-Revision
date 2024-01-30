// const promiseOne = new Promise(function (resolve, reject) {
//   // Do async task
//   // DB calls/File/settimeout
//   setTimeout(function () {
//     console.log("Tayyab");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Consumed");
// });

// new Promise(function (resole, reject) {
//   setTimeout(() => {
//     console.log("2nd promise");
//     resole();
//   }, 2000);
// }).then(() => {
//   console.log("Promise 2 is resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   // Do async task
//   // DB calls/File/settimeout
//   setTimeout(function () {
//     console.log("Tayyab");
//     resolve({ name: "Tayyab", price: 1000 });
//   }, 1000);
// }).then((user) => {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   // Do async task
//   // DB calls/File/settimeout
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "Tayyab", price: 1000 });
//     } else {
//       reject("Error Occured!");
//     }
//   }, 1000);
// })
//   .then((user) => {
//     console.log(user);
//     return user.name;
//   })
//   .then((name) => {
//     console.log(`Hello ${name}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("This is finally block");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   // Do async task
//   // DB calls/File/settimeout
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ name: "Tayyab", price: 1000 });
//     } else {
//       reject("Error Occured!");
//     }
//   }, 1000);
// });

// (async function consumePromise() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// })();

fetch("https://api.github.com/users/tayyab-dev123")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((e) => {
    console.log(e);
  });
