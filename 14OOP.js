function User(username, age, loggedIn) {
  this.username = username;
  this.age = age;
  this.loggedIn = loggedIn;
  return this;
}

// let userOne = User("Tayyab", 12, true);
// let userTwo = User("Abdullah", 12, true);
console.log(userOne);
console.log(userTwo);

let userOne = new User("Tayyab", 12, true);
let userTwo = new User("Abdullah", 12, true);
console.log(userOne);
console.log(userTwo);
