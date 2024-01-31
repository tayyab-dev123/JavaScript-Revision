function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  return ++this.score;
};

const user1 = new createUser("John", 5);
console.log(user1.increment());
