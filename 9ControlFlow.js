const array = [1];

if (array.length == 0) {
  console.log("Empty Array");
} else {
  console.log("Not empty array");
}
const myObj = { 1: "1" };
if (Object.keys(myObj).length == 0) {
  console.log("Empty Obj");
} else {
  console.log("Not empty obj");
}

//Nullish coalecs operator

let val1 = 5 ?? 10;
console.log(val1);
let val2 = null ?? 10;
console.log(val2);
let val3 = undefined ?? 10;
console.log(val3);
let val4 = undefined ?? 10 ?? 5;
console.log(val4);
let val5 = undefined ?? null ?? 5;
console.log(val5);

let price = 100;

price <= 80 ? console.log("Less than 80") : console.log("Greater than 80");

let month = 5;

switch (month) {
  case 1:
    console.log("jan");
    break;
  case 2:
    console.log("feb");

    break;
  case 3:
    console.log("mar");

    break;
  case 4:
    console.log("apl");

    break;
  case 5:
    console.log("may");

    break;

  default:
    break;
}
