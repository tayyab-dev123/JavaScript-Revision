let myArr1 = [0, 1, 2, 3, 4, 5, 6];
// console.log(myArr1.includes(2));
// console.log(myArr1.indexOf(3));
// myArr1.unshift(2);
// console.log(myArr1);
// myArr1.shift();
// console.log(myArr1);
// console.log("A", myArr1.slice(1, 3));
// console.log("B", myArr1);
// console.log("C", myArr1.splice(1, 3)); // Change the original copy of Arr
// console.log("D", myArr1);

console.log(Array.isArray("Tayyab"));
console.log(Array.from("Tayyab"));
console.log(Object.entries({ name: "Tayyab" }));

score = 100;
score2 = 200;
score3 = 300;

let scores = [score, score2, score3];
// console.log(scores);

console.log(Array.of(score, score2, score3));

console.log(myArr1.concat(scores));

allArr = [...myArr1, ...scores];

console.log(allArr);
